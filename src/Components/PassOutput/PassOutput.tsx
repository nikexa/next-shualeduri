"use client"
import Image from "next/image";
import React, { useContext } from "react";
import copy from '../../app/IMAGES/copy.png'
import { Contextia } from "@/app/page";

const PassOutput = () => {

  const { setIsCopied, password, isCopied  } = useContext(Contextia)!;

  function handleCopy(){
    navigator.clipboard.writeText(password)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  }

  return (
    <div className="max-sm:flex items-center flex-col">
      <button className="font-bold text-[24px] text-[#817D92] mb-5 max-sm:text-[16px] max-sm:mb-3">
        Password Generator
      </button>
      <div className="w-[540px] h-[80px] bg-[#24232C] flex items-center px-8 justify-between mb-5 max-sm:w-[343px] max-sm:h-[64px] max-sm:px-5">
        <p className="font-bold text-[32px] text-[#E6E5EA] max-sm:text-[22px]">{password}</p>
        <div className="flex  gap-5 max-sm:gap-3">
        {isCopied && <p className="font-bold text-[18px] text-[#A4FFAF]">COPIED</p>}
        <Image
          onClick={handleCopy}
          className="cursor-pointer"
          src={copy}
          alt=""
          height={24}
          width={24}
        />
        </div>
      </div>
    </div>
  );
};

export default PassOutput;
