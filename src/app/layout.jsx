import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import "./responsive.css";
import { SiteProvider } from "@/context/siteContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "TechCulture AI",
  description:
    "Leading IT & Technology Solutions company specializing in Hardware, Software, Enterprise, and GIS Solutions.",
  icons: {
    icon: "/favicon.ico",
  },
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
                  background: "rgba(16, 185, 129, 0.1)",
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
                  background: "rgba(239, 68, 68, 0.1)",
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
        </SiteProvider>
      </body>
    </html>
  );
}
