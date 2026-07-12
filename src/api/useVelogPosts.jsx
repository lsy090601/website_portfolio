import { useEffect, useMemo, useState } from "react";

function extractThumbnailAndDescription(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const firstImg = doc.querySelector("img");
  let thumbnail = firstImg ? firstImg.getAttribute("src") : null;
  if (!thumbnail) {
    const input = doc.querySelector("input[type='hidden']");
    thumbnail = input ? input.value : null;
  }
  const body = doc.querySelector("body");
  const description = body ? body.textContent.substring(0, 200) : "";
  return { thumbnail, description };
}

export function useVelogPosts(pageSize = 6) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const velogRssUrl = "https://v2.velog.io/rss/@int_1sy";
    const localJsonUrl = "./velog.json";
    const apiUrl = import.meta.env.DEV
      ? "/api/velog/rss"
      : `https://api.allorigins.win/raw?url=${encodeURIComponent(velogRssUrl)}`;

    const tryLocalJson = async () => {
      try {
        console.log("Trying to fetch velog.json from:", localJsonUrl);
        const r = await fetch(localJsonUrl, { signal: controller.signal });
        if (!r.ok) throw new Error(`local json not available (${r.status})`);
        const json = await r.json();
        console.log("Successfully loaded velog.json:", json.length, "posts");
        setPosts(json);
        setError(null);
        setLoading(false);
        return true;
      } catch (e) {
        console.error("Failed to load local velog.json:", e.message);
        return false;
      }
    };

    const doFetch = async () => {
      const ok = await tryLocalJson();
      if (ok) {
        return;
      }

      fetch(apiUrl, { signal: controller.signal })
        .then((res) => {
          if (!res.ok)
            throw new Error(`Network response was not ok (${res.status})`);
          return res.text();
        })
        .then((text) => {
          try {
            const xmlDocs = new DOMParser().parseFromString(text, "text/xml");
            const items = xmlDocs.getElementsByTagName("item");
            const parsed = [];
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              let title = "",
                link = "",
                pubDate = "",
                thumbnail = null,
                description = "";
              for (let child of item.children) {
                if (child.tagName === "title") title = child.textContent;
                else if (child.tagName === "link") link = child.textContent;
                else if (child.tagName === "pubDate")
                  pubDate = child.textContent.substring(0, 10);
                else if (child.tagName === "description") {
                  const extracted = extractThumbnailAndDescription(
                    child.textContent,
                  );
                  thumbnail = extracted.thumbnail;
                  description = extracted.description;
                }
              }
              parsed.push({
                title,
                url: link,
                date: pubDate,
                thumbnail,
                description,
              });
            }
            setPosts(parsed);
          } catch (e) {
            console.error("Velog RSS parse error", e);
            setError("파싱 실패");
          }
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.error("Velog RSS fetch timeout");
            setError("요청 타임아웃");
          } else {
            console.error("Velog RSS fetch error", e);
            setError(e.message || "fetch error");
          }
        })
        .finally(() => {
          clearTimeout(timeout);
          setLoading(false);
        });
    };

    doFetch(); // ✅ 호출 추가

    return () => {
      // ✅ cleanup을 useEffect 바로 아래로 이동
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(posts.length / pageSize)),
    [posts.length, pageSize],
  );
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return posts.slice(start, start + pageSize);
  }, [posts, page, pageSize]);

  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

  return {
    posts,
    loading,
    error,
    page,
    setPage,
    totalPages,
    pageItems,
    prevPage,
    nextPage,
  };
}
