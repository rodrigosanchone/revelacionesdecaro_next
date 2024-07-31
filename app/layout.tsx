import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";

import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata() {
  return {
    title: {
      default: "Revelaciones de caro",
      template: "%s -Revelaciones de caro"
    },
    description: "Blog de Filosofía y Astrología",
    openGraph: {
      title: "Revelaciones de caro",
      description: "Blog de Filosofía y Astrología",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/caratula.png?alt=media&token=60006946-8323-40c7-be51-e63fb9440335",
          width: 800,
          height: 600,
          alt: "Revelaciones de Caro"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "https://revelacionesdecaro.com/",
      creator: "Carolina",
      title: "Revelaciones de Caro",
      description: "Blog",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/caratula.png?alt=media&token=60006946-8323-40c7-be51-e63fb9440335",
          alt: "Revelaciones de Caro"
        }
      ]
    }
  };
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
