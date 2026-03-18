export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://docs.quickinfra.cloud/sitemap.xml",
    host: "https://docs.quickinfra.cloud",
  };
}
