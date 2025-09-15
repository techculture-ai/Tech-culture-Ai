export async function generateMetadata({ params }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  try {
    const response = await fetch(`${apiBaseUrl}/api/services/${params.serviceId}`, {
      cache: 'no-store' // Ensure fresh data for metadata
    });
    
    if (!response.ok) {
      return {
        title: 'Service Not Found - TechCulture',
        description: 'The requested service could not be found.',
      };
    }

    const data = await response.json();
    const service = data.service;

    if (service) {
      return {
        title: `${service.title} - TechCulture Services`,
        description: service.description,
        keywords: `${service.title}, ${service.category} service, TechCulture, AI services, technology solutions`,
        openGraph: {
          title: `${service.title} - TechCulture`,
          description: service.description,
          images: service.image ? [service.image] : [],
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: `${service.title} - TechCulture`,
          description: service.description,
          images: service.image ? [service.image] : [],
        },
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }

  return {
    title: 'Service Details - TechCulture',
    description: 'Explore our comprehensive AI-driven service solutions.',
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}
