import React, { useEffect, useState } from "react";
import Image from "next/image";
import animatedLoadingMan from "@/assets/image/animatedImage/animatedLoadingMan.webp";

import viewCollectionImage from "@/assets/image/normalImage/viewCollection.svg";
import logoFluffyHugs from "@/assets/image/normalImage/logoImage.svg";
import FruitsBackground from "./FruitsBackground";
import CatImageElement from "./CatImageElement";
import SocialMediaElements from "./SocialMediaElements";

const Body = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollDelta = 600;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      const scrollDelta = currentScrollPosition - scrollPosition;

      const newScrollPosition =
        scrollDelta > 0
          ? Math.min(scrollPosition + maxScrollDelta, currentScrollPosition)
          : Math.max(scrollPosition - maxScrollDelta, currentScrollPosition);

      setScrollPosition(newScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const rotateStyle = {
    transform: `rotate(${scrollPosition / 10}deg)`,
  };

  const loadingManStyle = {
    transform:
      scrollPosition > 1300
        ? "translateY(200px) scale(2) translateX(0px) rotate(0deg)"
        : scrollPosition >= 500
        ? "translateY(180px) scale(3) rotate(-90deg)"
        : "scale(1)",
    transition: "transform 1s",
  };

  const logoStyle = {
    opacity:
      scrollPosition <= 1300
        ? Math.max(0, Math.min(1, (scrollPosition - 300) / 200))
        : Math.max(0, Math.min(1, 0 / scrollPosition)),
    transition: "opacity 1s",
  };
  const fadeInParagraphStyle = {
    opacity: scrollPosition > 1300 ? 1 : 0,
    transition: "opacity 2s",
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="flex min-h-screen items-center justify-center">
          <Image
            className={`w-32 lg:w-64 fixed transform z-[9999]`}
            src={animatedLoadingMan}
            alt=""
            style={{ ...rotateStyle, ...loadingManStyle }}
          />

          {/* Fruits Image */}
          <FruitsBackground scrollPosition={scrollPosition} />

          {/* Cat */}
          <CatImageElement scrollPosition={scrollPosition} />

          <div style={fadeInParagraphStyle}>
            {scrollPosition > 1300 && (
              <p className="hover:scale-[1.005] duration-300 fixed top-[15%] left-[5%] lg:left-[55%] tracking-[1px] lg:tracking-[7px] leading-[40px] w-[90%] lg:w-[500px] cursor-pointer duration-2000">
                In the realm of Designville, Layout, the creative maestro,
                enchanted Fonts and Padding into a dance of letters and whimsy.
                <br />
                <br />
                Then, Image Icons, from fruits to toys, leapt to life, turning
                the kingdom into a vibrant canvas of animated wonder.
              </p>
            )}
          </div>
        </div>

        {/* Social Media Icon */}
        <SocialMediaElements />

        <div className="fixed -right-3 lg:-right-3 -bottom-6 lg:-bottom-20 z-[222] cursor-pointer">
          <Image
            className="w-[150px] lg:w-[225px]"
            src={viewCollectionImage}
            alt="viewCollectionImage"
          />
        </div>
        <div className="fixed lg:right-4 right-3 text-sm bottom-5 cursor-pointer tracking-[2px] lg:tracking-[6px] z-[333]">
          <p className="text-white text-[12px]">view collection</p>
        </div>

        {/* Logo from second slide */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={logoFluffyHugs}
            alt="logoFluffyHugs"
            className="w-[500px]"
            style={logoStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
