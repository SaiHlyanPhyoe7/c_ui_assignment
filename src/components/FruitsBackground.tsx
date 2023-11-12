import Image from "next/image";
import Kiwi1Image from "@/assets/image/fruits/Fruit-Layer-2015081200.svg";
import Coconut1Image from "@/assets/image/fruits/laobc_Coconut.svg";
import PassionFruitImage from "@/assets/image/fruits/passion-fruit.svg";
import PomegranateImage from "@/assets/image/fruits/pomegranate.svg";
import React, { useEffect, useState } from "react";

const FruitsBackground = ({ scrollPosition }: { scrollPosition: number }) => {
  const moveStyle = {
    transition: "transform 0.5s",
  };

  return (
    <div>
      {/* Kiwi1Image */}
      <Image
        src={Kiwi1Image}
        className="hover:scale-[1.1] fixed top-[30%] left-[20%] w-20 lg:w-48 cursor-pointer duration-2000"
        style={{
          ...moveStyle,
          transform: `translateX(${scrollPosition > 500 ? 2000 : 0}px)`,
        }}
        alt="Kiwi1Image"
      />

      {/* Coconut1Image */}
      <Image
        src={Coconut1Image}
        className="hover:scale-[1.1] fixed top-[60%] left-[80%] w-20 lg:w-48 cursor-pointer duration-2000"
        style={{
          ...moveStyle,
          transform: `translateX(${scrollPosition > 500 ? 2000 : 0}px)`,
        }}
        alt="Coconut1Image"
      />

      {/* PassionFruitImage */}
      <Image
        src={PassionFruitImage}
        className="hover:scale-[1.1] fixed top-[30%] right-[20%] w-20 lg:w-48 cursor-pointer duration-2000"
        style={{
          ...moveStyle,
          transform: `translateX(${scrollPosition > 500 ? -2000 : 0}px)`,
        }}
        alt="PassionFruitImage"
      />

      {/* PomegranateImage */}
      <Image
        src={PomegranateImage}
        className="hover:scale-[1.1] fixed top-[60%] right-[80%] w-20 lg:w-48 cursor-pointer duration-2000"
        style={{
          ...moveStyle,
          transform: `translateX(${scrollPosition > 500 ? 2000 : 0}px)`,
        }}
        alt="PomegranateImage"
      />
    </div>
  );
};

export default FruitsBackground;
