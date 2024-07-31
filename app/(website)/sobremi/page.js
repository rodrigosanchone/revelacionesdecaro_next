import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export async function generateMetadata() {
  return {
    title: {
      default: "Sobre mi",
      template: "%s -Revelaciones de caro"
    },
    description: "Sobre mi",
    openGraph: {
      title: "Contacto",

      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/about.png?alt=media&token=211bdc10-6e45-40a6-b97f-cad2e242367c",
          width: 800,
          height: 600,
          alt: "Sobre mi"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "https://revelacionesdecaro.com/contacto",
      creator: "Carolina",
      title: "Sobre mi",

      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/about.png?alt=media&token=211bdc10-6e45-40a6-b97f-cad2e242367c",
          alt: "Sobre mi"
        }
      ]
    }
  };
}

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}

// export const revalidate = 60;
