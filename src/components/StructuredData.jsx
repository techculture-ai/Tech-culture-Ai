"use client";
import { useEffect } from 'react';

const StructuredData = ({ service }) => {
  useEffect(() => {
    if (!service) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "TechCulture AI",
        "url": "https://techculture.ai",
        "logo": "https://techculture.ai/logo.png"
      },
      "serviceType": service.category,
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": service.title,
        "itemListElement": service.features?.map((feature, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        })) || []
      },
      "image": service.image,
      "url": typeof window !== 'undefined' ? window.location.href : `https://techculture.ai/services/${service.title?.replace(/\s+/g, "-")}`,
      "dateCreated": service.createdAt,
      "dateModified": service.updatedAt || service.createdAt
    };

    // Create or update script tag
    let scriptTag = document.getElementById('service-structured-data');
    if (scriptTag) {
      scriptTag.remove();
    }

    scriptTag = document.createElement('script');
    scriptTag.id = 'service-structured-data';
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    // Cleanup
    return () => {
      const existingScript = document.getElementById('service-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [service]);

  return null; // This component doesn't render anything
};

export default StructuredData;