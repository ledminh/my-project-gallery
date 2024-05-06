import Image from "next/image";
import { RightArrowHeadIcon } from "../../assets/icons";
import Link from "next/link";

import data from "./data";

export default function CentralImage() {
  const { header, paragraph, link, image } = data;

  return (
    <section className="relative">
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/60 to-black/10" />
      <div className="absolute top-0 w-full h-full bg-gradient-to-l from-black/60 to-black/10" />
      <div className="absolute top-0 w-full h-full">
        <div className="flex flex-col justify-center items-center h-full text-white gap-2 p-2 text-center">
          <h1 className="text-5xl font-bold">{header}</h1>
          <p>{paragraph}</p>
          <Link
            href={link.url}
            className="px-4 py-2 mt-4 bg-white text-black rounded-lg flex justify-between items-center gap-2"
          >
            <span>{link.text}</span>
            <div className="w-6 h-6">
              <RightArrowHeadIcon />
            </div>
          </Link>
        </div>
      </div>
      <Image
        src={image}
        alt="Central Image"
        width="1680"
        height="580"
        className="w-full h-[34rem] object-cover"
      />
    </section>
  );
}
