"use client";

import { BurgerIcon } from "../../assets/icons";
import { useEffect, useState } from "react";
import { mainMenuConfig, sideMenuConfig } from "../../config";
import Link from "next/link";
export default function PopUpMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { items: sideItems } = sideMenuConfig;
  const { items: mainItems } = mainMenuConfig;

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div className="relative">
      <button
        className="h-8 w-8"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        <BurgerIcon />
      </button>
      {isOpen && (
        <div className="bg-black text-white absolute right-0 p-4 flex flex-col gap-4 rounded-md z-50">
          <ul className="flex flex-col gap-2">
            {mainItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="hover:text-gray-400 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-white my-2"></div>
          <ul className="flex gap-4">
            {sideItems.map((item) => (
              <li key={item.id} className="w-6 h-6">
                <Link
                  href={item.url}
                  className="text-white hover:text-gray-400 transition-all duration-300 ease-in-out"
                >
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
