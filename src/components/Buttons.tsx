import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className: string;
  icon?: ReactNode
};

function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={twMerge(
        "!rounded-none !h-16 !bg-teal-accent !font-medium !text-[16px] !text-white relative overflow-hidden group hover:bg-transparent !p-0 cursor-pointer",
        className
      )}
      onClick={() => { }}
      {...otherProps}
    >
      <span className="relative z-10 px-6 h-full flex items-center justify-center duration-300 ease-in-out group-hover:text-gray-700">
        {children || "button"}
      </span>
      <span
        className="absolute inset-0 bg-white transform translate-x-full
                   transition-transform duration-300 ease-in-out group-hover:-translate-x-0"
      />
    </button>
  );
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { children, className, icon, ...otherProps } = props;

  return (
    <div data-aos="fade-right">
      <button
        className={twMerge("!px-5 py-3 !flex !items-center cursor-pointer gap-x-3 duration-300", className)}
        {...otherProps}
      >
        {children}
        {icon && icon}
      </button>
    </div>
  );
}

export default PrimaryButton;
