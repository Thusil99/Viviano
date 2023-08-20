"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The Best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(
  //       () => setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1)),
  //       2000
  //     );
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text Container */}
      <div className="h-1/2  flex flex-col items-center justify-center gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-5xl text-center p-5 uppercase md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white rounded-md py-4 px-5 hover:bg-red-400">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
