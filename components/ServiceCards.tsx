import React from "react";
import Image from "next/image";
import { ServiceProps } from "@/assets/ServiceVariables";

type ServiceCardsProps = {
  data: ServiceProps[];
};

const ServiceCards: React.FC<ServiceCardsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[20px] justify-center mt-[50px] lg:grid lg:grid-cols-2 xl:grid-cols-3">
      {data.map((ele, index) => (
        <div
          key={index}
          className="flex flex-col gap-[10px] p-[32px] text-center justify-center border border-paragraph max-w-[550px] mx-auto"
        >
          <div className="w-[50px] h-[50px] relative mx-auto">
            <Image src={ele.image.src} alt={ele.image.alt} fill />
          </div>
          <h3 className="text-primary">{ele.title}</h3>
          <p className="text-paragraph">{ele.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
