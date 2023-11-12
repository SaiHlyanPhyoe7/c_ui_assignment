import React, { useEffect, useState } from "react";
import Image from "next/image";
import animatedLoadingMan from "@/assets/image/animatedImage/animatedLoadingMan.webp";

const FourthSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex min-h-screen items-center justify-center"></div>
      </div>
    </div>
  );
};

export default FourthSection;
