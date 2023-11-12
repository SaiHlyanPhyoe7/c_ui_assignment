import Image from "next/image";
import React from "react";
import discordLogo from "@/assets/image/normalImage/discord.svg";
import twitterLogo from "@/assets/image/normalImage/twitter.svg";
import openseaLogo from "@/assets/image/normalImage/opensea.svg";

const SocialMediaElements = () => {
  return (
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
  );
};

export default SocialMediaElements;
