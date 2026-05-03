import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrivacyWhois — Anonymous Domain Availability Checker",
  description: "Check domain availability without registrars tracking and front-running your searches. Protect your domain ideas today."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e3c21877-5595-4856-a7f5-dc993ba57dd1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
