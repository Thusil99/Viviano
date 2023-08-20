"use client";

import { type } from "os";
import React from "react";
import { useState, useEffect } from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const PriceChecker = ({ price, id, options }: props) => {
  const [selected, setselected] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected == index ? "rgb(248 113 113)" : "white",
              color: selected == index ? "white" : "red",
            }}
            onClick={() => setselected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add button */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 ">
          <span>Quantity</span>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="uppercase bg-red-500 text-white ring-1 ring-red-400 p-3 w-56">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PriceChecker;
