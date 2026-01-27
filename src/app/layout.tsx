import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aditya Vyas | Software Engineer",
  description: "Software Engineer specializing in AI integration and real-time systems. Building the future of scalable applications.",
  keywords: ["Software Engineer", "AI", "Real-time Systems", "Next.js", "TypeScript", "Python"],
  authors: [{ name: "Aditya Vyas" }],
  openGraph: {
    title: "Aditya Vyas | Software Engineer",
    description: "Software Engineer specializing in AI and real-time systems.",
    url: "https://your-domain.com",
    siteName: "Aditya Vyas Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Vyas | Software Engineer",
    description: "Software Engineer specializing in AI and real-time systems.",
    creator: "@Adiiizi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
