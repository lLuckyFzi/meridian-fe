import React, { useState } from "react";

import ServicesCard from "./ServicesCard";
import { ServicesData } from "../data/servicesData";
import HeaderSlash from "meridian@/components/Headers/header";

function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(1);

  return (
    <section
      id="services"
      className="h-auto bg-teal-primary pt-52 flex flex-col gap-y-14 max-lg:pt-14 max-[1300px]:pt-12 max-lg:scroll-mt-24 "
    >
      <div className="px-32 flex flex-col gap-y-7 max-lg:px-16 max-md:px-7" data-aos="fade-right">
        <HeaderSlash
          className="text-white"
          light
          headerLine={"Layanan Kami"}
          subHeader={
            <p className="w-full max-lg:text-center max-md:text-4xl">
              Layanan Komprehensif untuk Kebutuhan Geospatial Anda
            </p>
          }
          subHeaderStyle={{ fontWeight: 800, fontSize: "48px" }}
          headerLineStyle={{ fontSize: "14px", fontWeight: 700 }}
        />
        <p className="font-light text-[20px] text-white max-lg:text-center">Kami menyediakan berbagai solusi pengukuran dan pemetaan yang presisi untuk mendukung proyek Anda.</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-0 h-full max-md:flex max-md:flex-col">
        {ServicesData.map((d, i) => {
          return (
            <ServicesCard
              key={d.id}
              img={d.img}
              icon={d.icon}
              title={d.title}
              description={d.description}
              activeId={activeCard == d.id}
              onHover={() => setActiveCard(d.id)}
              delay={i * 300}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
