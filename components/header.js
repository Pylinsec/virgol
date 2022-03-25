import React from "react";
import Virgool_logo from "../components/icons/virgoollogo";
import Search_logo from "./icons/searchlogo";
export default function Header() {
  return (
    <main className="h-[102px] py-[16px] flex items-center justify-center">
      <section className="w-[970px] max-w-[970px] h-[70px] flex flex-row justify-between  ">
        <div
          id="whatisvirgool"
          className="w-[145px] h-[70px] py-[10px] flex flex-row-reverse"
        >
          <Virgool_logo />

          <span className="pr-[13px] text-[#107abe] text-[13px] border-[1px] border-[white] flex justify-items-center items-center">
            ویرگول چیست؟
          </span>
        </div>
        <div
          id="searchloginregister"
          className="w-[199px] h-[70px] py-[10px] flex flex-row justify-between items-center"
        >
          <Search_logo className="flex justify-items-center items-center text-[#8E8E8E]" />
          <button className="w-[32px] h-[20px] text-[13px] flex justify-items-center items-center text-[#107ABE]">
            ورود
          </button>
          <button className="text-[13px] py-[5px] px-[25px] flex justify-items-center items-center rounded-md text-[#FFFFFF] bg-[#107ABE] mr-[15px] w-[90px] h-[30px]">
            ثبت نام
          </button>
        </div>
      </section>
    </main>
  );
}
