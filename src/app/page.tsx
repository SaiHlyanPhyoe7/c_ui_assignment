"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import initialLoadingImage from "@/assets/image/animatedImage/animatedLoadingMan.webp";
import { useEffect, useState } from "react";
import Body from "@/components/Body";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 100);
  }, []);
  return (
    <main className="">
      {initialLoading ? (
        <div className="flex min-h-screen justify-center items-center">
          <Image src={initialLoadingImage} alt="Loading"></Image>
        </div>
      ) : (
        <div>
          <div className="min-h-screen">
            <Navbar />
            <Body />
            <SecondSection />
            <ThirdSection />
          </div>
        </div>
      )}
    </main>
  );
}
