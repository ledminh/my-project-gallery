import Link from "next/link";
import data from "./data";

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl">Contact us</h3>
      <ul className="flex flex-col gap-6">
        {data.map((item) => (
          <li key={item.id} className="text-gray-600 flex  gap-2">
            <div className="w-6 h-6">
              <item.icon />
            </div>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
