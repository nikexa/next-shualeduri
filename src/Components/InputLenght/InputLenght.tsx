"use client"
import { Contextia } from "@/Contex/Contextia";;
import React, { useContext } from "react";

const InputLenght = () => {

  const {value , setValue} = useContext(Contextia)!

  return (
    <div className="w-[540px] flex flex-col items-center mb-10 max-sm:w-[343px]">
      <div className="px-10 flex justify-between mt-6 w-[540px] items-center mb-5 max-sm:w-[343px] max-sm:px-5">
        <p className="font-bold text-[18px] text-[#E6E5EA] max-sm:text-[16px]">Character Length</p>
        <p className="font-bold text-[32px] text-[#A4FFAF] max-sm:text-[24px]">{value}</p>
      </div>
      <input
        className="w-[476px] h-2 appearance-none cursor-pointer accent-[#A4FFAF] hover:accent-[#18171F] max-sm:w-[311px] rounded-lg"
        type="range"
        min={0}
        max={20}
        value={value}
        style={{
            background: `linear-gradient(to right, #9ef68f ${(value / 20) * 100}%, #222 ${(value / 20) * 100}%)`,
            WebkitAppearance: "none",
          }}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export default InputLenght;
