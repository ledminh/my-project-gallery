import data from "./data";
import Link from "next/link";

export default function Copyright() {
  return (
    <section className="p-2 bg-black text-gray-200 flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:justify-between text-sm">
      <p>{data.copyrightText}</p>
      <ul className="flex flex-col gap-6 justify-center items-center sm:justify-start sm:items-start sm:flex-row">
        {data.links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
