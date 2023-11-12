import React, { useEffect, useState } from "react";
import Image from "next/image";
import animatedLoadingMan from "@/assets/image/animatedImage/animatedLoadingMan.webp";
import discordLogo from "@/assets/image/normalImage/discord.svg";
import twitterLogo from "@/assets/image/normalImage/twitter.svg";
import openseaLogo from "@/assets/image/normalImage/opensea.svg";
import viewCollectionImage from "@/assets/image/normalImage/viewCollection.svg";
import logoFluffyHugs from "@/assets/image/normalImage/logoImage.svg";
import FruitsBackground from "./FruitsBackground";
import catImage from "@/assets/image/normalImage/catImage.webp";
import { motion } from "framer-motion";

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
          <FruitsBackground scrollPosition={scrollPosition} />
          {/* {scrollPosition > 600 && scrollPosition < 1300 && ( */}
          <div
            className={`fixed top-3 lg:top-10 right-1 lg:right-10 duration-500 scale-0 ${
              scrollPosition > 500 ? "scale-100" : ""
            }`}
          >
            <motion.div
              style={{ transformOrigin: "top" }}
              animate={{ rotate: [30, -30, 30, -30] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Image
                className="w-36 lg:w-48 transform origin-top duration-1000"
                src={catImage}
                alt="Cat Image"
              />
            </motion.div>
          </div>
          {/* )} */}
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

        {/* Fruits Image */}

        {/* Social Media Icon */}
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
