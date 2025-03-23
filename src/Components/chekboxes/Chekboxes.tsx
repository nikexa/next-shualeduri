"use client"
import { Contextia } from "@/Contex/Contextia";;
import React, { useContext } from "react";

interface ChekboxesProps {
  name: string,
  text: string
}

const Chekboxes: React.FC<ChekboxesProps> = ({name, text}) => {

  const { strenght, setStrenght} = useContext(Contextia)!

    // console.log(checkboxesData)
    
    console.log(strenght)

  function handleCheck(e : React.ChangeEvent<HTMLInputElement>){
    if(e.target.checked){
      setStrenght([...strenght, name])
    }else{
      setStrenght((prev => prev.filter((item) => item !== name)))
    }
  }



  return (
    <div className="flex flex-col gap-4 mb-7">
              <div key={name} className="flex gap-5 items-center">
          <input
            onChange={handleCheck}
            className="w-[20px] h-[20px] bg-[#69fe4e] accent-[#8ef69a]"
            type="checkbox"
            name={name}
            checked={strenght.includes(name)}
          />
          <p className="font-bold text-[18px] text-white max-sm:text-[16px]">
            {text}
          </p>
        </div>

    </div>
  );
};

export default Chekboxes;
