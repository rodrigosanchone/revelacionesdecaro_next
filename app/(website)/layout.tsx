import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      {/*  <div>{JSON.stringify(params)}</div> */}
      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </>
  );
}
