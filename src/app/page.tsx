"use client";
import Image from "next/image";
import InputLenght from "@/Components/InputLenght/InputLenght";
import PassOutput from "@/Components/PassOutput/PassOutput";
import Strenght from "@/Components/strenght/strenght";
import Confirbtn from "@/Components/confirmbtn/confirbtn";
import { createContext, useState } from "react";
import { checkboxesData } from "@/checkboxesData";
import Chekboxes from "@/Components/chekboxes/Chekboxes";

export const Contextia = createContext<ContextiaType | undefined>(undefined);

export interface ContextiaType {
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
  isCopied: boolean;
  password: string;
  spassword: React.Dispatch<React.SetStateAction<string>>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  strenght: string[];
  setStrenght: React.Dispatch<React.SetStateAction<string[]>>;  
}

export default function Home() {

    const [password,spassword]= useState("a1b1c1d1e1f1")
    const [isCopied,setIsCopied] = useState(false)
    const [value, setValue] = useState(4);
    const [checked , setChecked] = useState(false)
    const [strenght, setStrenght] = useState(["Uppercase"])

  return (
    <Contextia.Provider value={{password,spassword,isCopied,setIsCopied,value,setValue,strenght,setStrenght}}>
      <div className="w-full h-screen bg-[#18171F] flex flex-col justify-center items-center">
        <PassOutput />
        <div className="w-[540px] h-[548px] bg-[#24232C] flex flex-col items-center max-sm:w-[343px] max-sm:h-[500px]">
          <InputLenght />
          <div className="px-10 flex flex-col w-[540px] max-sm:w-[343px] max-sm:px-5">

                  {checkboxesData.map((item) => {
                    return(
                      <Chekboxes key={item.name}
                      text={item.text}
                      name={item.name}
                      />
                    )
                  })}
            <Strenght />
            <Confirbtn />
          </div>
        </div>
      </div>
    </Contextia.Provider>
  );
}
