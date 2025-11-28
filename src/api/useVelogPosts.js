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
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRss = () => {
      const xhr = new XMLHttpRequest();
      // GitHub Pages에서는 CORS 프록시 사용, 개발 환경에서는 Vite 프록시 사용
      const velogRssUrl = "https://v2.velog.io/rss/@int_1sy";
      const apiUrl = import.meta.env.DEV 
        ? "/api/velog/rss" 
        : `https://api.allorigins.win/raw?url=${encodeURIComponent(velogRssUrl)}`;
      xhr.open("GET", apiUrl);
      xhr.onload = () => {
        try {
          const xmlDocs = new DOMParser().parseFromString(
            xhr.response,
            "text/xml"
          );
          const items = xmlDocs.getElementsByTagName("item");
          const parsed = [];
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let title = "";
            let link = "";
            let pubDate = "";
            let thumbnail = null;
            let description = "";
            for (let child of item.children) {
              if (child.tagName === "title") title = child.textContent;
              else if (child.tagName === "link") link = child.textContent;
              else if (child.tagName === "pubDate")
                pubDate = child.textContent.substring(0, 10);
              else if (child.tagName === "description") {
                const extracted = extractThumbnailAndDescription(
                  child.textContent
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
        } finally {
          setLoading(false);
        }
      };
      xhr.onerror = () => {
        console.error("Velog RSS fetch error");
        setLoading(false);
      };
      xhr.send();
    };
    fetchRss();
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(posts.length / pageSize)),
    [posts.length, pageSize]
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
    page,
    setPage,
    totalPages,
    pageItems,
    prevPage,
    nextPage,
  };
}
