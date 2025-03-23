import { Contextia } from "@/Contex/Contextia";;
import React, { useContext } from "react";

const Confirbtn = () => {
  const { strenght, value, spassword } = useContext(Contextia)!;

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let pass = "";

    if (strenght.includes("Uppercase")) pass += uppercase;
    if (strenght.includes("Lowercase")) pass += lowercase;
    if (strenght.includes("Numbers")) pass += numbers;
    if (strenght.includes("Symbols")) pass += symbols;

    let generatedPass = "";
    for (let i = 0; i < value; i++) {
      const rand = Math.floor(Math.random() * pass.length);
      generatedPass += pass[rand];
    }

    spassword(generatedPass);
  };

  return (
    <button
      onClick={generatePassword}
      className="w-[476px] h-[65px] bg-[#A4FFAF] text-[18px] font-bold text-[#24232C] flex justify-center items-center gap-2 hover:bg-[#24232C] hover:border-2 hover:border-[#A4FFAF] hover:text-[#A4FFAF] duration-300 max-sm:w-[311px] max-sm:h-[56px]"
    >
      GENERATE
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className=" fill-[#24232C]"
          d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
        />
      </svg>
    </button>
  );
};

export default Confirbtn;
