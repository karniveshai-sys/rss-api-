const Parser = require("rss-parser");
const parser = new Parser();

module.exports = async (req, res) => {
  try {
    const feed = await parser.parseURL("http://pulse.zerodha.com/feed.php");
    const items = feed.items.slice(0, 25); // latest 25
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch RSS", details: error.message });
  }
};
