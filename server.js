addEventListener("fetch", event => {
  event.respondWith(handle(event.request));
});

async function handle(request) {
  const apiUrl = "https://<senin-n8n-api-url>/endpoint";
  const res = await fetch(apiUrl, {
    headers: { "Authorization": "Bearer <TOKEN>" } // Worker içinde saklı
  });
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    }
  });
}
