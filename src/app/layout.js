"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <html lang="en">
      
<link rel="manifest" href="/site.webmanifest"></link>
      <body

      >
       
        <Navbar/>
        <div className=' relative top-24 bottom-10'>

        {children}
        <ToastContainer/>
        <Footer/>
        </div>
        
      </body>
    </html>
  );
}
