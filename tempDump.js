import axios from "axios";
import FormData from "form-data";
import fs from "fs";

// ====== CONFIG ======
const API_URL = "http://localhost:8000/api/services";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJUZWNoIEN1bHR1cmUiLCJfaWQiOiI2OGIxNDJkZDE5YzI0YWZkYWYzNWMzYjkiLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzU3OTE3MjQ2LCJleHAiOjE3NTgwMDM2NDZ9.6rXAIjMFz6NGxzg_YAUL8lqSxPYxBDp4WE5DtnCsFao";

// Default image (you can use different images per service if you like)
const IMAGE_FILE = "my-app/public/aiml.png";

// ====== MAIN CATEGORY SERVICES ======
const mainServices = [
  "Website Design & Development",
  "E-Commerce Development",
  "CMS Development",
  "CRM, LMS, ERP Development",
  "Custom Web Application Development",
  "Mobile App Development (iOS & Android)",
  "API Development & Integration",
  "Software Testing & QA",
  "Website Maintenance & Support",
  "SEO & Digital Marketing Services",
  "Security Audits & Compliance",
  "Cloud Security & Data Protection",
  "Artificial Intelligence (AI & ML) Solutions",
  "Chatbot & Virtual Assistant Development",
  "Big Data Management",
  "IT Strategy & Roadmap Consulting",
  "Digital Transformation Services",
  "Industry-Specific IT Solutions",
];

// ====== INDUSTRY CATEGORY SERVICES ======
const industryServices = [
  "FinTech & Banking Solutions",
  "Healthcare & Telemedicine IT Solutions",
  "Retail & E-Commerce Platforms",
  "Education & E-Learning Solutions",
  "Travel & Logistics Software",
  "Real Estate & Property Tech Solutions",
  "Automotive & Transportation Systems",
  "Manufacturing & Industrial Automation",
  "Energy & Utilities IT Solutions",
  "Agriculture & AgriTech Solutions",
  "Hospitality & Food Service Solutions",
  "Media & Entertainment Platforms",
  "Telecom & Networking Solutions",
  "Insurance Technology (InsurTech)",
  "LegalTech & Compliance Solutions",
  "Government & Public Sector IT",
  "Defense & Aerospace Solutions",
  "Pharmaceutical & Life Sciences IT",
  "Construction & Engineering IT Solutions",
  "Sports & Fitness Technology",
  "Non-Profit & NGO Management Systems",
  "Event Management & Ticketing Solutions",
  "Mining & Natural Resources IT",
  "Supply Chain & Warehouse Management",
  "Fashion & Lifestyle Technology",
  "Gaming & Esports Platforms",
  "Cybersecurity & Fraud Detection Systems",
  "Food & Beverage Industry Tech",
  "Smart Cities & IoT Solutions",
  "Human Resources & Recruitment Tech (HRTech)",
];

// ====== FUNCTION TO CREATE SERVICE ======
async function createService(title, category) {
  const form = new FormData();
  form.append("title", title);
  form.append("description", `Service for ${title}`);
  form.append("category", category);

  // Attach image if it exists
  if (fs.existsSync(IMAGE_FILE)) {
    form.append("file", fs.createReadStream(IMAGE_FILE));
  }

  try {
    const response = await axios.post(API_URL, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    console.log(`✅ Created: ${title} (${category})`);
  } catch (err) {
    console.error(
      `❌ Failed: ${title} (${category})`,
      err.response?.data || err.message
    );
  }
}

// ====== MAIN EXECUTION ======
(async () => {
  for (const s of mainServices) {
    await createService(s, "main");
  }

  for (const s of industryServices) {
    await createService(s, "industry");
  }

  console.log("🎉 Done creating all services");
})();
