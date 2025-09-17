import WhatsAppChat from "@/components/whatsappChat";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import "./responsive.css";
import { SiteProvider } from "@/context/siteContext";
import { Toaster } from "react-hot-toast";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const metadata = {
  title: "TechCulture AI",
  description: "Ready to Redefine Success with Technology That Works?",
  icons: {
    icon: "/favicon.ico",
  },
  images: [
    {
      "url": `${baseUrl}/aiml.png`,
      width: 800,
      height: 600,
      alt: "TechCulture AI",
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteProvider>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                color: "#1f2937",
              },
              success: {
                style: {
                  background: "rgba(240, 240, 240, 0.5)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "#047857",
                },
                iconTheme: {
                  primary: "#10b981",
                  secondary: "#ffffff",
                },
              },
              error: {
                style: {
                  background: "rgba(240, 240, 240, 0.5)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "#dc2626",
                },
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#ffffff",
                },
              },
            }}
          />
          <WhatsAppChat />
        </SiteProvider>
      </body>
    </html>
  );
}
