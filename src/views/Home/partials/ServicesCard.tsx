import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

import { BiRuler } from "react-icons/bi";

interface ServicesCardProps {
  icon: ReactNode;
  img: StaticImageData;
  title: string;
  description: string;
  activeId: boolean;
  onHover: () => void;
  delay?: number;
}

function ServicesCard(props: ServicesCardProps) {
  const { img, icon, title, description, activeId, onHover, delay } = props;

  return (
    <div className="relative overflow-hidden h-full max-md:h-[500px] border-b border-b-white" onMouseEnter={onHover} data-aos="fade-up" data-aos-delay={delay}>
      <Image src={img} alt={title} className="w-full object-contain" />
      <motion.div
        className="absolute bottom-0 p-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-md backdrop-saturate-150 text-white max-md:w-full"
      // initial={{ y: "100%", opacity: 0 }}
      // animate={{
      //   y: activeId ? "0%" : "100%",
      //   opacity: activeId ? 1 : 0,
      // }}
      // transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-y-7">
          {icon || <BiRuler className="w-10 h-10 text-white" />}
          <span>
            <p className="font-bold text-[20px]">{title || "Card Title"}</p>
            <p className="font-light text-sm">
              {description || "Card Descripton"}
            </p>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default ServicesCard;
