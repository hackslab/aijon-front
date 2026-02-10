import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import {
  ADMIN_PLATFORM_DESCRIPTION,
  ADMIN_PLATFORM_NAME,
} from "@/lib/branding";

export const metadata: Metadata = {
  title: ADMIN_PLATFORM_NAME,
  description: ADMIN_PLATFORM_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
        <Toaster
          position="bottom-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
