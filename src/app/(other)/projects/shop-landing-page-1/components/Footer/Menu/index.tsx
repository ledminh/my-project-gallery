import data from "./data";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Menu</h3>
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="border-b border-b-transparent hover:border-b-black"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
