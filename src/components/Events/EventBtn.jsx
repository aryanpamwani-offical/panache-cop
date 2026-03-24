"use client";
import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";
import { event } from '@/components/utils/data'; // Adjust path as needed

const EventBtn = () => {
  // Get unique categories for the navigation buttons
  const uniqueCategories = [...new Set(event.map(item => item.Category))];

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center items-center gap-16 mt-24 w-5/6 m-auto ">
      {uniqueCategories.map((catName, index) => (
        <Link 
          key={index}
          href={`#${catName.replace(/\s+/g, '-')}`} 
          className={`${buttonVariants({ variant: "default_borderless" })} w-11/12`}
        >
          {catName}
        </Link>
      ))}
    </div>
  );
}

export default EventBtn;