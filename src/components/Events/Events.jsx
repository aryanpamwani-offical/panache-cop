"use client";
import React from 'react';
import CardSingle from '@/components/Cards/CardSingle';
import { SubHeading } from '@/components/Titlle/Subheading';
import { event, price } from '@/components/utils/data'; // Static imports
import EventBtn from './EventBtn';

export const Events = () => {
  const imageOnly = false;
  const textOnly = true;

  // Group static events by Category
  const categoriesMap = event.reduce((acc, item) => {
    const category = item.Category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const categoriesEntries = Object.entries(categoriesMap);
  let globalPriceIndex = 0;

  return (
    <>
      <EventBtn />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {categoriesEntries.map(([categoryName, items]) => (
            <div key={categoryName} id={categoryName.replace(/\s+/g, '-')}>
              <div className="my-10 justify-center m-auto text-center">
                <SubHeading title={categoryName} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {items.map((item) => {
                  const currentPrice = price[globalPriceIndex] || { single: "N/A", group: "N/A" };
                  globalPriceIndex++;
                  
                  return (
                    <CardSingle
                      key={item._id}
                      imageOnly={imageOnly}
                      textOnly={textOnly}
                      Name={item.Name}
                      Designation={item.Category}
                      ImgUrl={item.ImgUrl}
                      ShortDesc={item.ShortDesc}
                      Single={currentPrice.single}
                      Group={currentPrice.group}
                      loading={true} // Always true since data is local
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};