import Container from "@/components/container";
import { getArticleById } from "@/lib/firebase/articles.services";
import Image from "next/image";
import Link from "next/link";

/* export function getMetaTag(post) {
  return post;
}
 */
export default function ArticlePage({ post }) {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center"></div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.titulo}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post.fecha}></time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {post.urlVideo ? (
          <>
            {" "}
            <iframe
              src={post.urlVideo}
              width="1000"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </>
        ) : (
          <Image
            src={post.img}
            alt={post.titulo}
            loading="eager"
            fill
            sizes="800vw"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-3 my-3 whitespace-pre-wrap break-words dark:prose-invert prose-a:text-blue-600">
            {post.contenido}
            <div className="my-3">
              <div className="d-block">
                fecha:{" "}
                {new Date(post.fecha).toLocaleDateString("es-CR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit"
                })}
              </div>
              <div className="d-block">Autor: {post.autor}</div>
            </div>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← Ver todo los Post
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
