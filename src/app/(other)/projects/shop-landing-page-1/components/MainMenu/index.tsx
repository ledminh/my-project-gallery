import Link from "next/link";
import { mainMenuConfig } from "../../config";

export default function MainMenu() {
  const { items } = mainMenuConfig;

  return (
    <nav className="font-semibold">
      <ul className="flex gap-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="border-b-2 border-b-transparent hover:border-b-black"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
