import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
   const router = useRouter();

   useEffect(() => {
      router.replace("/");
   }, [router]);

   return null; // Optionally, show a spinner or message while redirecting
};

export default Custom404;
