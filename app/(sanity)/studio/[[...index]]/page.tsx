/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// app/(sanity)/studio/[[...index]]/page.tsx
import { Studio } from "sanity";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sanity Studio",
  description: "Administra tu contenido con Sanity"
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};
