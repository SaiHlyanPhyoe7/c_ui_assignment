import React, { useEffect, useState } from "react";
import Image from "next/image";
import animatedLoadingMan from "@/assets/image/animatedImage/animatedLoadingMan.webp";
import discordLogo from "@/assets/image/normalImage/discord.svg";
import twitterLogo from "@/assets/image/normalImage/twitter.svg";
import openseaLogo from "@/assets/image/normalImage/opensea.svg";
import viewCollectionImage from "@/assets/image/normalImage/viewCollection.svg";
import logoFluffyHugs from "@/assets/image/normalImage/logoImage.svg";

const Body = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("scrollPosition", scrollPosition);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      // Check if scroll position is greater than or equal to 500
      setShowLogo(currentScrollPosition >= 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotateStyle = {
    transform: `rotate(${scrollPosition / 10}deg)`,
  };

  const loadingManStyle = {
    transform:
      scrollPosition >= 500
        ? "translateY(220px) scale(2) rotate(-90deg)"
        : "scale(1)",
    transition: "transform 1s",
  };
  const logoStyle = {
    opacity: Math.max(0, Math.min(1, (scrollPosition - 300) / 200)), // Fades in as scroll position approaches 500, fades out as it approaches 300
    transition: "opacity 1s",
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex min-h-screen items-center justify-center">
          <Image
            className={`w-64 fixed transform`}
            src={animatedLoadingMan}
            alt=""
            style={{ ...rotateStyle, ...loadingManStyle }}
          />
        </div>
        <div className="fixed flex w-10 gap-5 left-10 bottom-8">
          <Image
            src={discordLogo}
            className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
            alt="discordLogo"
          />
          <Image
            src={openseaLogo}
            className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
            alt="openseaLogo"
          />
          <Image
            src={twitterLogo}
            className="hover:scale-[1.1] cursor-pointer hover:ring hover:ring-cyan-400 hover:ring-opacity-50 rounded-full duration-300"
            alt="twitterLogo"
          />
        </div>
        <div className="fixed -right-4 -bottom-20 z-[222] cursor-pointer">
          <Image src={viewCollectionImage} alt="viewCollectionImage" />
          <p className="text-white">View Collection</p>
        </div>
        <div className="fixed right-4 text-sm bottom-8 cursor-pointer tracking-[6px] z-[333]">
          <p className="text-white">view collection</p>
        </div>
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
