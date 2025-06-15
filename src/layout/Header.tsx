"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import LogoMeridianLight from "../../public/logo/meridian-light.png";
import LogoMeridianDark from "../../public/logo/meridian-dark.png";
import PrimaryButton from "meridian@/components/Buttons";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { handleWhatsAppAction } from "meridian@/utils/whatsappAction";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  console.log(menuOpen);

  useEffect(() => {
    const handleScrolled = () => {
      console.log("ScrollY:", window.scrollY);
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={twMerge(
        "flex justify-between items-center fixed pl-[120px] z-[99] right-0 left-0 top-0 duration-300 max-lg:p-14 max-lg:py-1 max-sm:px-4",
        scrolled && "bg-white shadow-2xl"
      )}
    >
      <div className="py-5">
        <Image
          src={scrolled ? LogoMeridianDark : LogoMeridianLight}
          // width={999}
          // height={999}
          priority
          alt="logo-light"
          className="w-[120px]"
        />
      </div>
      <div
        className={twMerge(
          "flex items-center gap-x-6 text-white py-5 h-full max-lg:hidden",
          scrolled && "text-gray-700"
        )}
      >
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
        ].map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={twMerge(
                "relative px-2 transition-colors duration-300 text-white !font-montserrat",
                scrolled && "text-gray-700",
                activeSection === item.href.slice(1) && "font-bold"
              )}
            >
              {item.label}
              <span
                className={twMerge(
                  "absolute left-0 -bottom-1 h-[3px] w-0 bg-teal-400 z-10 transition-all duration-300",
                  activeSection === item.href.slice(1) && "w-full"
                )}
              />
            </Link>
          );
        })}
      </div>
      <div className="max-lg:hidden">
        <PrimaryButton className="!px-8" onClick={handleWhatsAppAction}>Mulai Sekarang</PrimaryButton>
      </div>

      <div className="md:hidden z-[101] justify-end flex items-end">
        {!menuOpen && (
          <button
            className={twMerge(
              "cursor-pointer text-white",
              scrolled && "text-gray-700"
            )}
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        )}
      </div>
      <div
        className={twMerge(
          "fixed inset-0 bg-white flex flex-col justify-center items-center text-white text-center gap-y-10 font-sora transition-all duration-500 z-[100]",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="w-full absolute top-0 left-0 right-0 items-center justify-between flex px-8 py-5">
          <Image
            src={LogoMeridianDark}
            width={999}
            height={999}
            priority
            alt="logo-dark"
            className="w-[120px]  top-8 left-6"
          />

          <button
            className={twMerge(
              " top-6 right-6 text-gray-700 text-3xl cursor-pointer"
            )}
            onClick={() => setMenuOpen(false)}
          >
            <MdOutlineClose />
          </button>
        </div>

        <Link
          href={"#home"}
          className="text-2xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="text-2xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          href={"#services"}
          className="text-2xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <PrimaryButton onClick={handleWhatsAppAction} className="!absolute !bottom-0 !left-0 !right-0">
          Hubungi Kami
        </PrimaryButton>
      </div>
    </nav>
  );
}

export default Header;
