"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/NavBar";
import Topbar from "@/components/shared/TopBar";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/context/AuthProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bugaboo",
  description: "Code reviews for everyone",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <html lang="en">
          <meta charSet="UTF'8" />
          <link rel="icon" href="./favicon.ico" />
          <title>Bugaboo</title>

          <body className={`${inter.className} min-h-screen`}>
            <header className="w-full">
              <Topbar />
              <Navbar />
            </header>
            <Toaster richColors/>
            {children}
            <footer>
              <Footer />
            </footer>
          </body>
        </html>
      </AuthProvider>
    </QueryClientProvider>
  );
}
