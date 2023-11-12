import React from "react";
import { motion } from "framer-motion";
import catImage from "@/assets/image/normalImage/catImage.webp";
import Image from "next/image";

const CatImageElement = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
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
  );
};

export default CatImageElement;
