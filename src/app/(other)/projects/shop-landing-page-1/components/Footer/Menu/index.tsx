import data from "./data";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl">Menu</h3>
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="border-b border-b-transparent hover:border-b-black"
            >
              <span className="text-gray-600">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
