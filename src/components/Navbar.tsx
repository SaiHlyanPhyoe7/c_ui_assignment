import React, { useEffect, useState } from "react";
import logo from "@/assets/image/normalImage/logoImage.svg";
import Image from "next/image";

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500;
      const opacity = 1 - Math.min(1, scrollPosition / maxScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-5 lg:top-10 left-5 lg:left-10 z-[999999]"
      style={{ opacity: scrollOpacity }}
    >
      <Image
        src={logo}
        className="w-[170px] lg:w-[350px]"
        alt="Fluffy Hugs Logo"
      ></Image>
    </div>
  );
};

export default Navbar;
