"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const path=usePathname();
  useEffect(() => {
     console.log(path)
  }, [])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <img src={"/logo.svg"}width={50} height={50} alt="logo"/>
        <ul className='hidden md:flex gap-6'>
          <li className={`hover:text-primary hover:font-bold trasition all-cursor-pointer
          ${path=='/Home'&&'text-primary font-bold'}
         `}
          >Home</li>
          <li className={`hover:text-primary hover:font-bold trasition all-cursor-pointer
          ${path=='/Home/dashboard'&&'text-primary font-bold'}
         `}>Dashboard</li>
          <li className={`hover:text-primary hover:font-bold trasition all-cursor-pointer
          ${path=='/Home/profile'&&'text-primary font-bold'}
         `}>Profile</li>
        </ul>
        <UserButton/>
    </div>
  )
}
export default Header;
