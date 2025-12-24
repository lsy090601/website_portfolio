const fs = require('fs');
const { parseStringPromise } = require('xml2js');

function extractThumbnailAndDescription(htmlString) {
  if (!htmlString) return { thumbnail: null, description: '' };
  const imgMatch = htmlString.match(/<img[^>]+src=["']([^"']+)["']/i);
  let thumbnail = imgMatch ? imgMatch[1] : null;
  if (!thumbnail) {
    const inputMatch = htmlString.match(/<input[^>]+type=["']hidden["'][^>]*value=["']([^"']+)["']/i);
    thumbnail = inputMatch ? inputMatch[1] : null;
  }
  const desc = htmlString.replace(/<[^>]*>/g, '').trim().slice(0, 200);
  return { thumbnail, description: desc };
}

(async () => {
  try {
    const res = await fetch('https://v2.velog.io/rss/@int_1sy');
    if (!res.ok) throw new Error('Failed to fetch RSS: ' + res.status);
    const text = await res.text();
    const xml = await parseStringPromise(text, { explicitArray: false, trim: true });
    const items = (xml && xml.rss && xml.rss.channel && xml.rss.channel.item) || [];
    const list = (Array.isArray(items) ? items : [items]).filter(Boolean).map((item) => {
      const descHtml = item.description || '';
      const { thumbnail, description } = extractThumbnailAndDescription(descHtml);
      return {
        title: item.title || '',
        url: item.link || '',
        date: item.pubDate ? item.pubDate.substring(0, 10) : '',
        thumbnail,
        description,
      };
    });
    if (!fs.existsSync('public')) fs.mkdirSync('public');
    fs.writeFileSync('public/velog.json', JSON.stringify(list, null, 2), 'utf8');
    console.log('public/velog.json written, items:', list.length);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(2);
  }
})();
