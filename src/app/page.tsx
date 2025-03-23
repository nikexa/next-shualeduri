"use client";
import InputLenght from "@/Components/InputLenght/InputLenght";
import PassOutput from "@/Components/PassOutput/PassOutput";
import Strenght from "@/Components/strenght/strenght";
import Confirbtn from "@/Components/confirmbtn/confirbtn";
import {useState } from "react";
import { checkboxesData } from "@/checkboxesData";
import Chekboxes from "@/Components/chekboxes/Chekboxes";

import { Contextia } from "@/Contex/Contextia";

export default function Home() {

    const [password,spassword]= useState("a1b1c1d1e1f1")
    const [isCopied,setIsCopied] = useState(false)
    const [value, setValue] = useState(4);
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
