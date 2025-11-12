// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   const { path, ...params } = req.query;

//   if (!path || Array.isArray(path)) {
//     return res.status(400).json({ error: "Invalid path" });
//   }

//   const url = `https://api.yeatwork.ru/${path}`;
//   const searchParams = new URLSearchParams(params as Record<string, string>);

//   try {
//     const response = await fetch(`${url}?${searchParams}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     res.status(response.status).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Proxy failed" });
//   }
// }

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
