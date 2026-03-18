export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://docs.quickinfra.cloud/#website",
        "url": "https://docs.quickinfra.cloud",
        "name": "QuickInfra Docs",
        "description": "Official documentation for QuickInfra — Cloud Infrastructure Automation Platform",
        "publisher": {
          "@id": "https://docs.quickinfra.cloud/#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://docs.quickinfra.cloud/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://docs.quickinfra.cloud/#organization",
        "name": "QuickInfra Cloud Solutions Pvt. Ltd.",
        "url": "https://quickinfracloud.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docs.quickinfra.cloud/quickInfra-logo.png",
        },
        "sameAs": [
          "https://www.linkedin.com/company/quickinfra-cloud",
          "https://twitter.com/quickinfra",
          "https://www.youtube.com/@quickinfraplatform",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@quickinfracloud.com",
          "contactType": "customer support",
        },
      },
      {
        "@type": "TechArticle",
        "headline": "QuickInfra Documentation",
        "description": "Step-by-step guides for every QuickInfra feature — cloud accounts, VM management, CI/CD pipelines, multi-cloud infrastructure provisioning.",
        "url": "https://docs.quickinfra.cloud",
        "author": {
          "@id": "https://docs.quickinfra.cloud/#organization",
        },
        "publisher": {
          "@id": "https://docs.quickinfra.cloud/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
