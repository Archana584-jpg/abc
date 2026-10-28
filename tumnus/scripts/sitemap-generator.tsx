const fs = require("fs");
const globby = require("globby");
function addPage(page: string) {
   const path = page.replace(".next/server/pages", "").replace(".html", "").replace(".js", "");
   const route = path === "/index" ? "" : path;
   return `  <url>
    <loc>https://gridlines.io${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route ? 0.8 : 1.0}</priority>
  </url>`;
}
async function generateSitemap() {
   // excludes Nextjs files.
   const pages = await globby([
      ".next/server/pages/*.js",
      "!.next/server/pages/_*.js",
      ".next/server/pages/products/*.html",
      ".next/server/pages/use-cases/*.html",
   ]);
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join("\n")}
  </urlset>`;
   fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
