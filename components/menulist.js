import Link from "next/link";
import React from "react";
import { menu_list_data } from "./json/data";

export default function Menu_list() {
  return (
    <main className="px-[24px] mx-[19px]  h-[55.6px] bg-[#107ABE] flex justify-center  items-center">
      <ul className="flex flex-row w-[1000px]  ">
        {menu_list_data.map(item => (
          <li key={item.id} className="pl-[15px] ">
            <Link href={item.link}>
              <a className="text-[#FFFFFFD6] text-[13px]" target="_blank">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
