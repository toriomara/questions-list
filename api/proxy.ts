import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { path, ...params } = req.query;

  if (!path || Array.isArray(path)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  const url = `https://api.yeatwork.ru/${path}`;
  const searchParams = new URLSearchParams(params as Record<string, string>);

  try {
    const response = await fetch(`${url}?${searchParams}`, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Proxy failed" });
  }
}
