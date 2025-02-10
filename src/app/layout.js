"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/style.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const { pathname } = useRouter();

  const resetScroll = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    resetScroll();
  }, [pathname]);

  return (
    <html lang="fr">
      <body className={``}>
        <Header />
        {children}
      </body>
    </html>
  );
}
