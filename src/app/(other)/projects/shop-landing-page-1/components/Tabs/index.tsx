"use client";

import Image from "next/image";
import Link from "next/link";
import data from "./data";

import { useState } from "react";
import { RightArrowHeadIcon } from "../../assets/icons";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(data[0].id);

  return (
    <section className="p-2 flex flex-col gap-8">
      <ul className="flex flex-wrap justify-center items-center gap-6">
        {data.map((tab) => (
          <li key={tab.id}>
            <button onClick={() => setActiveTab(tab.id)}>
              <h3
                className={`font-bold ${
                  activeTab === tab.id
                    ? "lg:text-3xl text-2xl"
                    : "lg:text-2xl text-xl text-gray-500"
                }`}
              >
                {tab.name}
              </h3>
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {data.map((tab) => (
          <li key={tab.id}>
            <ul
              className={`${
                activeTab === tab.id ? "block" : "hidden"
              } grid md:grid-cols-4 grid-cols-2 gap-4`}
            >
              {tab.products.map((product) => (
                <li key={product.id} className="group">
                  <Link href={`/product/${product.slug}`}>
                    <div className="relative">
                      <div className="absolute w-full h-full bg-black bg-opacity-0 rounded-lg shadow-lg group-hover:bg-opacity-30 flex justify-center items-center">
                        <div className="group-hover:opacity-100 opacity-0 bg-white px-4 py-2 rounded-lg shadow-lg hover:bg-white/80">
                          View Detail
                        </div>
                      </div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg"
                      />
                    </div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Link
          href="/shop"
          className="border border-black w-32 text-center p-2 hover:bg-gray-300 font-semibold flex justify-center items-center gap-2 rounded-lg shadow-lg"
        >
          <span>Load more</span>
          <div className="w-6 h-6">
            <RightArrowHeadIcon />
          </div>
        </Link>
      </div>
    </section>
  );
}
