"use client";
import React, { useState, useEffect } from 'react';
import { head } from '@/components/utils/data';
import CardSingle from '@/components/Cards/CardSingle';

export const HeadTeam = () => {
  let imageOnly = false;
  let textOnly = false;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setLoading(true);
        }, 2000);
      }, 2000);
    }, 2000);

    return () => clearTimeout(timeout1);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto" data-aos="fade-down">
        <div className="flex flex-wrap ">
          {head.map((items) => {
            return (
              <div className="p-4 md:w-1/3 w-full" key={items._id}>
                <CardSingle
                  imageOnly={imageOnly}
                  textOnly={textOnly}
                  Name={items.Name}
                  Designation={items.Designation}
                  ImgUrl={items.ImgUrl}
                  loading={loading}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
