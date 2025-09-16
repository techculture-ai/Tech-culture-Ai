export async function generateMetadata({ params }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://techculture.ai';
  const serviceSlug = params.serviceId;
  
  try {
    // Fetch service data for metadata
    const response = await fetch(`${apiBaseUrl}/api/services/slug/${serviceSlug}`, {
      cache: 'no-store', // Ensure fresh data for SEO
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      // Fallback metadata for non-existent services
      return {
        title: 'Service Not Found | TechCulture AI',
        description: 'The requested service could not be found. Explore our comprehensive range of AI-driven technology solutions and professional services.',
        keywords: 'TechCulture AI, AI services, technology solutions, digital transformation, not found',
        openGraph: {
          title: 'Service Not Found | TechCulture AI',
          description: 'The requested service could not be found. Explore our comprehensive range of AI-driven technology solutions.',
          url: `${baseUrl}/services/${serviceSlug}`,
          siteName: 'TechCulture AI',
          type: 'website',
          images: [
            {
              url: `${baseUrl}/images/default-og-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'TechCulture AI - Professional Technology Services',
            }
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Service Not Found | TechCulture AI',
          description: 'The requested service could not be found. Explore our AI-driven technology solutions.',
          images: [`${baseUrl}/images/default-og-image.jpg`],
        },
      };
    }

    const data = await response.json();
    const service = data.service || data;

    if (service) {
      // Generate SEO-optimized title
      const serviceTitle = `${service.title} - Professional ${service.category?.charAt(0)?.toUpperCase()}${service.category?.slice(1)} Services | TechCulture AI`;
      
      // Enhanced description for SEO
      const serviceDescription = `${service.description} Transform your business with our expert ${service.title?.toLowerCase()} solutions. Contact TechCulture AI for professional consultation and implementation.`;
      
      // Generate comprehensive keywords
      const serviceKeywords = [
        service.title,
        `${service.category} service`,
        'TechCulture AI',
        'AI services',
        'technology solutions',
        'digital transformation',
        'professional services',
        'business automation',
        'custom software development',
        ...(service.features?.slice(0, 5) || [])
      ].filter(Boolean).join(', ');

      // Service URL for sharing
      const serviceUrl = `${baseUrl}/services/${serviceSlug}`;
      
      // Open Graph image - use service image or fallback
      const ogImage = service.image || `${baseUrl}/images/default-service-og.jpg`;
      
      return {
        title: serviceTitle,
        description: serviceDescription,
        keywords: serviceKeywords,
        authors: [{ name: 'TechCulture AI Team' }],
        creator: 'TechCulture AI',
        publisher: 'TechCulture AI',
        formatDetection: {
          email: false,
          address: false,
          telephone: false,
        },
        metadataBase: new URL(baseUrl),
        alternates: {
          canonical: serviceUrl,
        },
        robots: {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
        
        // Open Graph metadata for social sharing
        openGraph: {
          title: `${service.title} | TechCulture AI`,
          description: serviceDescription,
          url: serviceUrl,
          siteName: 'TechCulture AI',
          locale: 'en_US',
          type: 'website',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: `${service.title} - TechCulture AI Professional Service`,
              type: 'image/jpeg',
            },
            {
              url: ogImage,
              width: 800,
              height: 600,
              alt: `${service.title} - TechCulture AI`,
              type: 'image/jpeg',
            }
          ],
        },
        
        // Twitter Card metadata
        twitter: {
          card: 'summary_large_image',
          title: `${service.title} | TechCulture AI`,
          description: serviceDescription,
          site: '@TechCultureAI',
          creator: '@TechCultureAI',
          images: [
            {
              url: ogImage,
              alt: `${service.title} - TechCulture AI Service`,
            }
          ],
        },
        
        // Additional structured data
        other: {
          'article:author': 'TechCulture AI',
          'article:section': service.category || 'Technology Services',
          'article:tag': service.features?.join(', ') || 'AI, Technology, Services',
          'og:image:secure_url': ogImage,
          'og:image:type': 'image/jpeg',
          'og:updated_time': service.updatedAt || service.createdAt,
          'business:contact_data:street_address': 'Your Business Address',
          'business:contact_data:locality': 'Your City',
          'business:contact_data:region': 'Your State',
          'business:contact_data:postal_code': 'Your ZIP',
          'business:contact_data:country_name': 'Your Country',
        },
      };
    }
  } catch (error) {
    console.error('Error generating service metadata:', error);
  }

  // Default fallback metadata
  return {
    title: 'Premium AI Services & Technology Solutions | TechCulture AI',
    description: 'Discover our comprehensive range of AI-driven technology services. From custom software development to digital transformation consulting - TechCulture AI delivers professional solutions.',
    keywords: 'TechCulture AI, AI services, technology solutions, digital transformation, custom software, consulting',
    openGraph: {
      title: 'Premium AI Services & Technology Solutions | TechCulture AI',
      description: 'Discover our comprehensive range of AI-driven technology services and professional solutions.',
      url: `${baseUrl}/services`,
      siteName: 'TechCulture AI',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/default-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'TechCulture AI - Professional Technology Services',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Premium AI Services & Technology Solutions | TechCulture AI',
      description: 'Discover our comprehensive range of AI-driven technology services and professional solutions.',
      images: [`${baseUrl}/images/default-og-image.jpg`],
    },
  };
}

export default function ServiceDetailLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}