"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { buttonVariants } from '../ui/button'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const NavBar = () => {
  
  const [open, setOpen] = useState(false);
  return (
    <>
     <header className={`text-white body-font fixed w-full bg-black top-0 z-50 font-bold ${open?"lg:border-b-2 lg:border-gray-700": "border-b-2 border-gray-700"} backdrop-blur-lg`}>
        <div className={`container mx-auto flex w-full flex-wrap p-5 items-center flex-row h-24`}>
          <Link href={"/"} className="flex title-font font-medium text-white mb-4 w-1/5 text-xl mt-3">
            <span className="ml-3  mr-1 font-bold">Panache </span> (C.O.P)
          </Link>
         
          <div className='lg:hidden flex w-4/5 justify-end items-center' onClick={()=>{setOpen(!open)}}>
            {open ? <X /> : <Menu />}
          </div>

          <nav className="lg:flex lg:w-3/5 lg:flex-row w-0 lg:flex-wrap lg:items-center font-bold lg:text-base lg:justify-end lg:m-auto hidden lg:mr-5">
            <Link href="/" className="mr-5 hover:text-slate-400">Home</Link>
            <Link href="/about" className="mr-5 hover:text-slate-400">About</Link>
            <Link href="/events" className="mr-5 hover:text-slate-400">Events</Link>
            <Link href="/gallery" className="mr-5 hover:text-slate-400">Gallery</Link>
            <Link href="/teams" className="mr-5 hover:text-slate-400">Our Teams</Link>
           
           </nav>
        </div>

        {open && (
          <nav className="lg:hidden flex flex-col justify-center items-center border-b-2 gap-9 py-5">
            <Link className="mr-5 hover:text-slate-400" href='/'>Home</Link>
            <Link className="mr-5 hover:text-slate-400" href='/about'>About</Link>
            <Link className="mr-5 hover:text-slate-400" href='/events'>Events</Link>
            <Link className="mr-5 hover:text-slate-400" href='/gallery'>Gallery</Link>
            <Link href="/teams" className="mr-5 hover:text-slate-400">Our Teams</Link>
          </nav>
        )}
      </header>
    </>
  )
}

export default NavBar
