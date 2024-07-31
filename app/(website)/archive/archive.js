"use client";
import { useState, useEffect } from "react";
import { getAllArticles } from "@/lib/firebase/articles.services";
import { cx } from "@/utils/all";
import Image from "next/image";
import Pagination from "@/components/blog/pagination";
// Importa useSearchParams
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import Container from "@/components/container";

export default function Post() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const POSTS_PER_PAGE = 6;
  const pageIndex = parseInt(searchParams.get("page"), 10) || 1;
  const startIndex = (pageIndex - 1) * POSTS_PER_PAGE;
  const endIndex = pageIndex * POSTS_PER_PAGE;
  const isFirstPage = pageIndex === 1;
  const isLastPage = pageIndex * POSTS_PER_PAGE >= articles.length;
  const currentArticles = articles.slice(startIndex, endIndex);

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
  }, [pageIndex]);
  const handlePageChange = newPage => {
    router.push(`/?page=${newPage}`);
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
          <Container className="relative">
            <div className="mb-10 mt-10 flex justify-center">
              <h2 className="text-5xl font-bold">Articulos</h2>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {/*  <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                Articulos
              </h1> */}
              {currentArticles.map(article => (
                <div
                  key={article.id}
                  className={cx("group cursor-pointer")}>
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

          <Pagination
            pageIndex={pageIndex}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            onPageChange={newPage => router.push(`/?page=${newPage}`)}
          />
        </>
      )}
    </>
  );
}
