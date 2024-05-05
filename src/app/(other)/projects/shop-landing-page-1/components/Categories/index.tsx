"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import {
  DiagonalArrowIcon,
  LeftArrowHeadIcon,
  RightArrowHeadIcon,
} from "../../assets/icons";

import categories from "./data";

export default function Categories() {
  const ulRef = useRef<HTMLUListElement>(null);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (ulRef.current === null) return;

    const handleResize = () => {
      if (ulRef.current === null) return;

      setScrollWidth(ulRef.current.scrollWidth);
      setClientWidth(ulRef.current.clientWidth);
      setScrollLeft(ulRef.current.scrollLeft);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (ulRef.current === null) return;

    const scrollAmount = document.body.getBoundingClientRect().width * 0.9;

    let newScrollLeft = ulRef.current.scrollLeft;

    if (direction === "left") {
      newScrollLeft -= scrollAmount;
    } else if (direction === "right") {
      newScrollLeft += scrollAmount;
    }

    if (newScrollLeft < scrollAmount) newScrollLeft = 0;
    else if (newScrollLeft > scrollWidth - clientWidth)
      newScrollLeft = scrollWidth - clientWidth;
    else if (
      scrollWidth - newScrollLeft > clientWidth &&
      scrollWidth - newScrollLeft <= clientWidth * 1.2
    ) {
      newScrollLeft = scrollWidth - clientWidth;
    }

    ulRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    setScrollLeft(newScrollLeft);
  };

  return (
    <section className="p-2 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">SHOP BY CATEGORIES</h2>
        {scrollWidth > clientWidth && (
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
                ulRef.current !== null &&
                scrollLeft ===
                  ulRef.current.scrollWidth - ulRef.current.clientWidth
              }
            >
              <RightArrowHeadIcon />
            </button>
          </div>
        )}
      </div>
      <ul
        className={`flex justify-between items-center gap-4 overflow-hidden`}
        ref={ulRef}
      >
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={"/" + category.slug}
              className="flex flex-col gap-2 w-60 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg shadow-lg group-hover:bg-opacity-30">
                  <DiagonalArrowIcon className="absolute bottom-[10px] right-[10px] w-12 h-12 text-white opacity-0 group-hover:opacity-100" />
                </div>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={800}
                  height={800}
                  className="object-cover h-80 rounded-lg shadow-lg"
                />
              </div>
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
