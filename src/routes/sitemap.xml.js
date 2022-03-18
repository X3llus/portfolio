export async function get() {
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
    return {
      headers,
      body: `<?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
            <loc>bradencoates.ca</loc>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
        </url>
        <url>
            <loc>bradencoates.ca/about</loc>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
        <url>
            <loc>bradencoates.ca/projects</loc>
            <changefreq>always</changefreq>
            <priority>0.3</priority>
        </url>
      </urlset>`,
    }
  }