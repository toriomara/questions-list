import { type VercelRequest, type VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { endpoint, ...params } = req.query as { endpoint?: string; [key: string]: string | string[] | undefined };

  if (!endpoint) {
    return res.status(400).json({ error: 'Endpoint required' });
  }

  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => queryParams.append(key, v));
    } else if (value !== undefined) {
      queryParams.append(key, value);
    }
  });

  const url = `https://api.yeatwork.ru/${endpoint}?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}