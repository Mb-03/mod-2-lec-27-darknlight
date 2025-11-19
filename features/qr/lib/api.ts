export async function fetchGeneratedUrl() {
  const res = await fetch("https://691dd7add58e64bf0d37e534.mockapi.io/url");
  if (!res.ok) {
    throw new Error("Failed to fetch URL");
  }

  const data = await res.json();
  return data[0].url;
}
