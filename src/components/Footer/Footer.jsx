import Link from 'next/link'
import React from 'react'
import { GitCommitVertical } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font relative -bottom-24 z-50 bg-white w-full  border-t-2">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
      <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl">Panache</span>
      </Link>
      <div className="flex lg:flex-row md:flex-row  sm:flex-row flex-col  ">
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200  sm:py-2 sm:mt-0 mt-4">© 2026 SRGI [COP] — Jhansi </p>
    
      <p className="text-sm text-gray-500 sm:ml-4  sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-bold">Made by / Developer - Himanshu Kherajani (B Pharm , Third Year) 

       </p>
       <p className="text-sm text-gray-500 sm:ml-4  sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">For Any Quries Contact - 9131580398</p>
       </div>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       
       
        <a href='https://www.instagram.com/panache_cop?igsh=Ynlya3l1MzJ3MDRk' className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      
      </span>
    </div>
  </footer>

  )
}

export default Footer
