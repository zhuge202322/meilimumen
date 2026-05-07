import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { CartProvider } from "@/context/CartContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Beautiful Sunshine Building Materials",
  description: "Quality Wooden Doors & Custom Home Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSerif.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('site-theme');
                  if (savedTheme) {
                    const parsedTheme = JSON.parse(savedTheme);
                    
                    const hexToRgb = (hex) => {
                      const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
                      return result ? parseInt(result[1], 16) + ' ' + parseInt(result[2], 16) + ' ' + parseInt(result[3], 16) : null;
                    };

                    const root = document.documentElement;
                    if (parsedTheme.primary) root.style.setProperty('--color-primary', hexToRgb(parsedTheme.primary) || '54 33 21');
                    if (parsedTheme.primaryContainer) root.style.setProperty('--color-primary-container', hexToRgb(parsedTheme.primaryContainer) || '78 54 41');
                    if (parsedTheme.secondary) root.style.setProperty('--color-secondary', hexToRgb(parsedTheme.secondary) || '100 93 86');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <div className="flex-grow pt-20 flex flex-col">
            {children}
          </div>
          <Footer />
          <ThemeSwitcher />
        </CartProvider>
      </body>
    </html>
  );
}