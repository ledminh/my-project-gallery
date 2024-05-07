import Link from "next/link";
import data from "./data";

export default function DownloadApp() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl">Download Now</h3>
      <ul className="flex flex-col gap-6 justify-center items-center sm:justify-start sm:items-start">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href="/"
              className="text-gray-300 bg-black flex gap-2 py-4 px-2 rounded-lg w-48 hover:text-white"
            >
              <div className="w-6 h-6">
                <item.icon />
              </div>
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
