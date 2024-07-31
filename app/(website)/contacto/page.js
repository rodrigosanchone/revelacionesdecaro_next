import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export async function generateMetadata() {
  return {
    title: {
      default: "Contacto ",
      template: "%s -Revelaciones de caro"
    },
    description: "Formulario de contacto",
    openGraph: {
      title: "Contacto ",
      description: "Formulario de contacto",
      images: [
        {
          url: "https://revelacionesdecaro.com/contacto",
          width: 800,
          height: 600,
          alt: "constacto"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "https://revelacionesdecaro.com/contacto",
      creator: "Carolina",
      title: "Contacto",
      description: "Formulario de Contacto",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/contacto.png?alt=media&token=81209b8e-7511-4f96-8211-626211e48b61",
          alt: "Contacto"
        }
      ]
    }
  };
}
export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
