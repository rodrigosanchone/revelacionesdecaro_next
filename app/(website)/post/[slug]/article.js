"use client";

import { useEffect, useState } from "react";
import { getArticleById } from "@/lib/firebase/articles.services";
import { useParams } from "next/navigation";
import ArticlePage from "./default";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  let [post, setPost] = useState({});

  let data = useParams();
  let dataId = data.slug;
  const [isLoading, setisLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
    if (data) {
      getArticleById(dataId).then(articleData => {
        // Verifica los datos del artículo
        setTimeout(() => {
          setPost(articleData);

          setisLoading(false);

          return setPost;
        }, 2000);
      });
    }
  }, [setPost]);

  return (
    <>
      {isLoading ? (
        // Muestra el spinner mientras se cargan los datos
        <div className="flex h-screen items-center justify-center">
          {/* Centrado vertical y horizontal */}
          <LoaderCircle className="h-12 w-12 animate-spin text-blue-500" />
          {/* Aumenta el tamaño del spinner (ajusta el valor de w-12 y h-12 según tus necesidades) */}
        </div>
      ) : (
        // Cuando los datos están listos, muestra el componente ArticlePage
        <>
          <ArticlePage post={post} />
          <div className="flex justify-center space-x-4">
            <Link
              className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-100"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noreferrer">
              <img
                className="h-10 w-10"
                src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Ffacebook-logo_2504792.png?alt=media&token=cb0ce98c-7148-44e0-824e-966f8de84ae2"
                loading="lazy"
                alt="facebook"
              />
            </Link>

            <Link
              className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-100"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.titulo)}`}
              target="blank"
              rel="noreferrer">
              <img
                className="h-10 w-10"
                src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Ftwitter_5969020.png?alt=media&token=51501e23-e068-4bea-9f0c-48874c731fb3"
                loading="lazy"
                alt="twitter"
              />
            </Link>
            <Link
              className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-100"
              href={
                "https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(url)"
              }
              target="_blank"
              rel="noreferrer">
              <img
                className="h-10 w-10"
                src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Fwhatsapp.png?alt=media&token=1db6af44-7b8b-42a4-8f24-d0bff0509733"
                loading="lazy"
                alt="threads"
              />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
