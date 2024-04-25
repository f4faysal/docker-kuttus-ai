import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kuttus Ai',
  description: 'kuttus Ai is a web app that allows you to shorten URLs.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
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
