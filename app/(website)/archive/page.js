import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <>
      <Container className="relative">
       
        <div className="text-center">
        {/*   <p className="mt-2 text-lg">
            See all posts we have ever written.
          </p> */}
        </div>
       
        
          <Archive/>
       
      </Container>
    </>
  );
}

// export const revalidate = 60;
