export default async function handler(req, res) {
  const path = req.url.replace("/api/", "");
  const url = `https://api.yeatwork.ru/${path}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed" });
  }
}
