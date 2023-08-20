import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text container */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl xl:text-6xl">
          Delicious Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pointificate parallel
        </p>
        <CountDown />
        <button className="bg-reD-500 rounded-md text-white py-3 px-6 hover:bg-red-400">
          Order Now
        </button>
      </div>
      {/* Image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
