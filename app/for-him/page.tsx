import Image from "next/image";
import React from "react";

type Props = {};

const data: any = {
  Facial: [
    {
      name: "Facial Cleanser",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Facial Moisturizer",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Facial Toner",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Facial Cleanser",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Facial Moisturizer",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Facial Toner",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
  ],
  Hair: [
    {
      name: "Shampoo",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Conditioner",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Hair Gel",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Shampoo",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Conditioner",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Hair Gel",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Shampoo",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Conditioner",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Hair Gel",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
  ],
  Body: [
    {
      name: "Body Wash",
      price: 10,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Body Lotion",
      price: 15,
      imageUrl: "/servicesHome/2.png",
    },
    {
      name: "Body Scrub",
      price: 20,
      imageUrl: "/servicesHome/2.png",
    },
  ],
};

const page = (props: Props) => {
  return (
    <div className="pb-52">
      <div className="inline-block pl-8">
        <h1 className="text-5xl">For Him</h1>
        <div className="w-[70%] h-[2px] bg-[#ECD8BD]"></div>
      </div>

      {/* loop through the keys of the data */}

      {Object.keys(data).map((key) => (
        <div key={key} className="py-8">
          <div className="inline-block px-10">
            <h2 className="text-3xl">{key}</h2>
            <div className="w-[50%] h-[2px] bg-[#ECD8BD]"></div>
          </div>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data[key].map((item: any) => (
              <div key={item.name} className=" p-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={270}
                  height={380}
                />
                <h3 className="text-xl">{item.name}</h3>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
