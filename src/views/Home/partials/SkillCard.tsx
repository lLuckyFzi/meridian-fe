import React, { ReactNode } from "react";
import { RiSpeakAiFill } from "react-icons/ri";

interface SkillCardProps {
  idx: number;
  delay: number;
  icon: ReactNode;
  title: string;
  description: string;
}

function SkillCard(props: SkillCardProps) {
  const { icon, title, description, idx, delay } = props;

  return (
    <div className="relative bg-white flex flex-col gap-y-3.5 p-8 shadow-2xl h-[280px] hover:bg-teal-primary group duration-300 transition-colors max-lg:h-auto" data-aos="fade-up" data-aos-delay={delay}>
      <span className="bg-teal-primary p-3.5 text-white font-bold text-2xl font-montserrat absolute top-0 right-0 group-hover:bg-teal-accent">{`0${idx}` || "01"}</span>
      <div>
        {icon || <RiSpeakAiFill className="w-8 h-8 text-teal-primary" />}
      </div>
      <div className="flex flex-col gap-y-2 group-hover:text-white">
        <p className="font-bold text-[20px] font-montserrat">{title || "Card Title"}</p>
        <p className="font-regular text-[14px] text-gray-500 group-hover:text-white">
          {description || "Card Description"}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
