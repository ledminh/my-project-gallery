"use client";

import { useState } from "react";
import Image from "next/image";

import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons";
import client1Img from "../../assets/images/clients/client1.jpg";

import data from "./data";

export default function Testimonials() {
  const [curClient, setCurClient] = useState(0);

  const next = () => {
    setCurClient((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setCurClient((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Happy Clients
      </h2>
      <div className="bg-gray-200 m-2 p-4 rounded-lg flex flex-col gap-4 text-center">
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prev}
            className="w-10 h-10 p-2 rounded-full border border-black"
          >
            <LeftArrowIcon />
          </button>
          <span className="font-semibold text-lg">{`${curClient + 1}/${
            data.length
          }`}</span>
          <button
            onClick={next}
            className="w-10 h-10 p-2 rounded-full border border-black"
          >
            <RightArrowIcon />
          </button>
        </div>

        <p className="font-semibold italic">{data[curClient].text}</p>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            src={data[curClient].profileImg}
            alt="Client 1"
            width={100}
            height={100}
            className="overflow-hidden rounded-full"
          />
          <div>
            <h4 className="font-semibold">{data[curClient].name}</h4>
            <p className="font-light">{data[curClient].title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
