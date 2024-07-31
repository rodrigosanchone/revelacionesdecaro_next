"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

import { useState, useEffect } from "react";
import { getAllArticles } from "@/lib/firebase/articles.services";
import { cx } from "@/utils/all";
import Image from "next/image";

// Importa useSearchParams

/* import { useRouter, useSearchParams } from "next/navigation"; */
import { LoaderCircle } from "lucide-react";

export default function Post({ posts }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isArchive, setIsArchive] = useState(false);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setTimeout(() => {
          setArticles(fetchedArticles);
          setisLoading(false);
        }, 2000);
      } catch (error) {
        setArticles([]);
      }
    };
    fetchArticles();
  }, [articles]);

  const giveClick = () => {
    setIsArchive(true);
    console.log(isArchive);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          {/* Centrado vertical y horizontal */}
          <LoaderCircle className="h-12 w-12 animate-spin text-blue-500" />
          {/* Aumenta el tamaño del spinner (ajusta el valor de w-12 y h-12 según tus necesidades) */}
        </div>
      ) : (
        <>
          <div
            className={cx(
              "group cursor-pointer",
              "grid gap-10 md:grid-cols-2"
            )}>
            {articles.slice(0, 2).map(article => (
              <div
                key={article.id}
                className={cx(
                  " m-20 overflow-hidden rounded-md bg-gray-100 transition-all   hover:scale-105 dark:bg-gray-800"
                )}>
                <div
                  className={cx(
                    " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
                  )}>
                  <Link
                    className={"relative block aspect-square"}
                    href={`/post/${article.id}`}>
                    <Image
                      src={article.img}
                      alt={article.titulo || "Thumbnail"}
                      className="object-cover transition-all"
                      fill
                      sizes="(max-width: 768px) 30vw, 33vw"
                    />
                  </Link>
                </div>
                <h2
                  className={cx(
                    "m-5    text-center dark:text-white"
                  )}>
                  <Link href={`/post/${article.id}`}>
                    <span
                      className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_3px]
        group-hover:bg-[length:100%_10px]
        dark:from-purple-800 dark:to-purple-900">
                      {article.titulo}
                    </span>
                  </Link>
                </h2>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-5 mt-5 flex justify-center">
              <h2 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                Articulos
              </h2>
            </div>
            {posts && (
              <Container>
                <div className="grid gap-10 md:grid-cols-3 lg:gap-10 ">
                  {articles.slice(0, 6).map(article => (
                    <div
                      key={article.id}
                      className={cx(
                        " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
                      )}>
                      <div
                        className={cx(
                          " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
                        )}>
                        <Link
                          className={"relative block aspect-square"}
                          href={`/post/${article.id}`}>
                          <Image
                            src={article.img}
                            alt={article.titulo || "Thumbnail"}
                            className="object-cover transition-all"
                            fill
                            sizes="(max-width: 768px) 30vw, 33vw"
                          />
                        </Link>
                      </div>
                      <h2 className={cx("mt-2    dark:text-white")}>
                        <Link href={`/post/${article.id}`}>
                          <span
                            className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_3px]
        group-hover:bg-[length:100%_10px]
        dark:from-purple-800 dark:to-purple-900">
                            {article.titulo}
                          </span>
                        </Link>
                      </h2>
                    </div>
                  ))}
                </div>
              </Container>
            )}
          </div>
        </>
      )}
      <div className="mt-10 flex justify-center" onClick={giveClick}>
        <Link
          href="/archive"
          className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
          <span>Ver más</span>
        </Link>
      </div>
    </>
  );
}
