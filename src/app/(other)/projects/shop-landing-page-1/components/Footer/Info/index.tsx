import Link from "next/link";
import data from "./data";
import { LocationPinIcon } from "../../../assets/icons";

export default function Info() {
  const { title, address, linkMap, socials } = data;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Link
        href={linkMap}
        target="_blank"
        rel="noreferrer"
        className="flex gap-1"
      >
        <div className="w-[20px] pt-1">
          <LocationPinIcon />
        </div>
        <p>{address}</p>
      </Link>
      <ul className="flex gap-1">
        {socials.map((social) => (
          <li key={social.id}>
            <Link
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 p-1 block border border-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              <social.icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
