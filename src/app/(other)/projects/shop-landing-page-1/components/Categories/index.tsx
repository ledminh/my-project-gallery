"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";
import { LeftArrowHeadIcon, RightArrowHeadIcon } from "../../assets/icons";

import categories from "./data";

export default function Categories() {
  const ulRef = useRef<HTMLUListElement>(null);

  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const ul = ulRef.current;
    if (!ul) return;

    const scrollWidth = ul.scrollWidth;
    const clientWidth = ul.clientWidth;

    if (direction === "left") {
      setScrollLeft((prev) =>
        prev - clientWidth < 0 ? 0 : prev - clientWidth
      );
    } else {
      setScrollLeft((prev) =>
        prev + clientWidth > scrollWidth
          ? scrollWidth - clientWidth
          : prev + clientWidth
      );
    }
  };

  return (
    <section className="p-2 flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">SHOP BY CATEGORIES</h2>
        <div className="flex gap-2">
          <button
            className="w-8 h-8 border border-black rounded-full p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleScroll("left")}
            disabled={scrollLeft === 0}
          >
            <LeftArrowHeadIcon />
          </button>
          <button
            className="w-8 h-8 border border-black rounded-full p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleScroll("right")}
            disabled={
              scrollLeft ===
              ulRef.current!.scrollWidth - ulRef.current!.clientWidth
            }
          >
            <RightArrowHeadIcon />
          </button>
        </div>
      </div>
      <ul className={`flex justify-between items-center gap-4`} ref={ulRef}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={"/" + category.slug}
              className="flex flex-col gap-2 w-64"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={800}
                height={800}
                className="object-cover h-80 rounded-lg shadow-lg"
              />
              <div className="flex flex-col px-2">
                <span className="font-bold">{category.name}</span>
                <span className="text-gray-500 font-semibold">
                  {category.numItems +
                    (category.numItems > 1 ? " items" : " item")}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
