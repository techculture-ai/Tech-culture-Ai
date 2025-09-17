export const metadata = {
  title: "Our Workspace | TechCulture AI - Behind the Scenes of Innovation",
  description: "Explore the dynamic environment where our team creates cutting-edge AI solutions and transforms ideas into reality. Get an inside look at our workspace and creative process.",
  keywords: [
    "TechCulture AI workspace",
    "office environment", 
    "AI development team",
    "behind the scenes",
    "innovation workspace",
    "team collaboration",
    "creative environment",
    "tech workspace",
    "AI development process"
  ].join(", "),
  openGraph: {
    title: "Our Workspace | TechCulture AI",
    description: "Explore the dynamic environment where our team creates cutting-edge AI solutions and transforms ideas into reality.",
    type: "website",
    locale: "en_US",
    siteName: "TechCulture AI",
    images: [
      {
        url: "/images/workspace-og.jpg",
        width: 1200,
        height: 630,
        alt: "TechCulture AI Workspace - Behind the Scenes of Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Workspace | TechCulture AI",
    description: "Explore the dynamic environment where our team creates cutting-edge AI solutions and transforms ideas into reality.",
    images: ["/images/workspace-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/our-workspace",
  },
};