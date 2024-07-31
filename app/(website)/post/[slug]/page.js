import Article from "./article";

import { Metadata, ResolvingMetadata } from "next";
import { getMetaTag } from "./default";
import { getArticleById } from "@/lib/firebase/articles.services";
export async function generateMetadata({ params }) {
  const post = await getArticleById(params.slug);
  return {
    title: {
      default: post?.titulo,
      template: "%s -Revelaciones de caro"
    },
    description: post?.titulo,
    openGraph: {
      title: post?.titulo,
      description: "Mira este Articulo",
      images: [
        {
          url: post?.img,
          width: 800,
          height: 600,
          alt: post?.titulo
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "https://revelacionesdecaro.com/",
      creator: "Carolina",
      title: post?.titulo,
      description: "Mira este articulo",
      images: [
        {
          url: post?.img,
          alt: post?.titulo
        }
      ]
    }
  };
}

export default function Page() {
  return (
    <>
      <Article></Article>
    </>
  );
}
