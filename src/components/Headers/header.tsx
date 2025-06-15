import React, { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderSlashProps {
  headerLine: ReactNode;
  subHeader: ReactNode;
  className?: string;
  headerLineStyle?: CSSProperties;
  subHeaderStyle?: CSSProperties;
  light?: boolean;
  slash?: boolean;
}

function HeaderSlash(props: HeaderSlashProps) {
  const {
    className,
    headerLine,
    subHeader,
    headerLineStyle,
    subHeaderStyle,
    light,
    slash = true,
  } = props;

  return (
    <div className={twMerge("flex flex-col gap-y-2", className)}>
      <div className="flex items-center gap-x-3" data-aos="fade-right" data-aos-duration="700">
        {slash && (
          <hr
            className={twMerge(
              "w-24 h-[2px] rounded-full border-none bg-teal-accent font-bold max-lg:hidden",
              light ? "bg-white" : "bg-teal-accent"
            )}
          />
        )}
        <p
          className={twMerge(
            "font-bold font-montserrat !text-teal-accent max-lg:text-center max-lg:w-full",
            light ? "!text-white" : "text-teal-primary"
          )}
          style={{ ...headerLineStyle, lineHeight: 1 }}
        >
          {headerLine || "Header Line"}
        </p>
      </div>
      <div>
        <span
          className="font-bold font-montserrat"
          style={{ ...subHeaderStyle, lineHeight: 1 }}
        >
          {subHeader || "Sub Header"}
        </span>
      </div>
    </div>
  );
}

export default HeaderSlash;
