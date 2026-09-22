import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://zannu.bimtechsolutions.com.ng'; // Replace with your actual domain later

  return {
    rules: {
      userAgent: '*', // Allow all search engines
      allow: '/',     // Allow crawling the entire sit
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}