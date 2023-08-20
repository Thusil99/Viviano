"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const user = false;

const Menu = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="cursor-pointer">
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white top-24 left-0 absolute h-[calc(100vh-6rem)] flex flex-col items-center justify-center w-full gap-8 text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setopen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setopen(false)}>
              LOGIN
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setopen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setopen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
