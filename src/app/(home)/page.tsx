import Link from "next/link";

import data from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="bg-slate-600 text-white text-3xl font-bold p-2">
          My Project Gallery
        </h1>
      </header>
      <main>
        <ul className="m-4 flex justify-start gap-4">
          {data.map((project) => (
            <li key={project.id}>
              <Link
                href={project.link}
                className="shadow-md shadow-black rounded-md p-2 flex flex-col gap-2 justify-center items-center bg-slate-200 "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-60 h-60 rounded-md overflow-hidden"
                />
                <h2 className="font-bold text-lg">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
