"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Strong from '../../app/IMAGES/Strong.png'
import Medium from '../../app/IMAGES/Medium.png'
import Weak from '../../app/IMAGES/Weak.png'
import TooWeak from '../../app/IMAGES/TooWeak.png'
import { Contextia } from "@/Contex/Contextia";

const Strenght = () => {

  const {strenght} = useContext(Contextia)!

  console.log(strenght.length)



  return (
    <div className='w-[476px] h-[72px] bg-[#18171F] px-10 flex justify-between items-center mb-7 max-sm:w-[311px] max-sm:h-[56px] max-sm:px-5'>
        <p className='font-bold text-[18px] text-[#817D92] max-sm:text-[16px]'>STRENGTH</p>

        {strenght.length <= 1 ? <Image className='h-auto w-auto max-sm:h-[25px]' src={TooWeak} alt='' width={200} height={200}/> : strenght.length  == 2 ? <Image className='h-auto w-auto' src={Weak} alt='' width={200} height={200}/> : strenght.length == 3 ? <Image className='h-auto w-auto' src={Medium} alt='' width={200} height={200}/> : strenght.length == 4 && <Image className='h-auto w-auto' src={Strong} alt='' width={200} height={200}/> }

    </div>
  )
}

export default Strenght