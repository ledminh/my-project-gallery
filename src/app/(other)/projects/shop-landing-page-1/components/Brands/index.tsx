import Image from "next/image";
import Link from "next/link";

import data from "./data";

export default function Brands() {
  const { intro, items } = data;

  return (
    <section>
      <h2 className="text-4xl font-bold text-center">{intro}</h2>
      <ul className="flex flex-wrap justify-center items-center gap-4 mt-8">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/brands/${item.slug}`} className="w-40 block">
              <Image src={item.image} alt={item.name} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
