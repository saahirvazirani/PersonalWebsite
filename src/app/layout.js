import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Head from "next/head";

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8CP11C2HCC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8CP11C2HCC');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
