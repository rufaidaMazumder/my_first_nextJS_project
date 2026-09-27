import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { PlanProvider } from "@/context/PlanContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion to plan and log your workouts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="fitlog">
      <body className={`${oswald.variable} bg-base-100 text-base-content`}>
        <PlanProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: "#1a1a1a", color: "#fff", border: "1px solid #2a2a2a" },
              success: { iconTheme: { primary: "#ccff00", secondary: "#0a0a0a" } },
            }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}