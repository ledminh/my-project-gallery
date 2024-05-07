"use client";

import data from "./data";
import Image from "next/image";
import { useState } from "react";

export default function ShopAddresses() {
  const [curShop, setCurShop] = useState(data[0]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Visit our shop
      </h2>
      <ul className="flex justify-center items-center gap-8">
        {data.map((shop) => (
          <li key={shop.id}>
            <button
              className={`border-b-2 border-b-transparent group hover:border-b-black ${
                curShop.id === shop.id ? "border-b-black" : ""
              }`}
              onClick={() => setCurShop(shop)}
            >
              <span
                className={`font-semibold text-lg md:text-xl group-hover:text-black ${
                  curShop.id === shop.id ? "text-black" : "text-gray-400"
                }`}
              >
                {shop.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 items-center max-w-[1000px] m-auto bg-gray-200">
        <div className="flex flex-col gap-6 p-4 row-start-1 col-start-1 col-span-2 z-50 bg-gray-500/80 text-gray-200 md:col-span-1 md:bg-transparent md:text-gray-700">
          <h3 className="text-3xl font-semibold">{curShop.name}</h3>
          <div className="flex flex-col gap-4">
            <div>
              <p>
                <span className="font-bold">Address: </span>
                {curShop.address1}
              </p>
              <p>{curShop.address2}</p>
            </div>
            <div>
              <p>
                <span className="font-bold">Hours: </span>
                {curShop.hours}
              </p>
              <p>
                <span className="font-bold">Phone: </span>
                {curShop.phone}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={curShop.image}
          alt="Shop 1"
          width={1200}
          height={1200}
          className="object-cover w-full row-start-1 col-start-1 col-span-2 md:col-span-1"
        />
      </div>
    </section>
  );
}
