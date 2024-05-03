import { sideMenuConfig } from "../../config";
import Link from "next/link";

export default function SideMenu() {
  const { items } = sideMenuConfig;

  return (
    <nav>
      <ul className="flex gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.url} className="h-6 w-6 block">
              <item.icon />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
