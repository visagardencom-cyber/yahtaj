import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yahtaj | AI-Powered IT Solutions",
  description: "Transform your business with cutting-edge AI solutions, web development, and automation services from Yahtaj IT.",
  keywords: ["AI", "IT Solutions", "Web Development", "Automation", "Consulting"],
  authors: [{ name: "Yahtaj IT" }],
  openGraph: {
    title: "Yahtaj | AI-Powered IT Solutions",
    description: "Transform your business with cutting-edge AI solutions and IT services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}