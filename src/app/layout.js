import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saahir Vazirani Personal Website",
  description: "Personal website for Saahir Vazirani. This website includes home, about, portfolio, and contact pages. This website was built using Next.JS, Framer Motion, and Tailwind CSS",
  icons: {
    icon: '/favicon2.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
