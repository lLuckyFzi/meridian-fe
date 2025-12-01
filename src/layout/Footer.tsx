"use client"

import React from "react";
import { Button, Tooltip } from "antd";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

import MeridianLogoDark from "../../public/logo/meridian-dark.png";
import { handleWhatsAppAction } from "meridian@/utils/whatsappAction";

function Footer() {
  const linkedinURL = "https://www.linkedin.com/company/meridian-global-utama"

  return (
    <div className="bg-white">
      <div className="flex justify-between px-32 py-12 max-lg:flex-col max-lg:gap-y-11 max-lg:px-16 max-md:px-7">
        <div className="flex flex-col gap-y-3.5 max-lg:items-center">
          <Image
            src={MeridianLogoDark}
            alt="meridian-logo-dark"
            width={999}
            height={999}
            className="w-56"
          />
          <p className="text-sm w-96 max-lg:text-center">
            Centennial Tower, Jl. Gatot Subroto Lv. 29, Karet Semanggi,
            Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta 12930
          </p>
        </div>
        <div className="flex flex-col gap-y-2 max-lg:items-center">
          <div className="flex gap-x-7 items-center">
            <Tooltip title="LinkedIn">
              <Button type="text" onClick={() => window.open(linkedinURL, "_blank")} className="h-auto w-auto px-0">
                <FaLinkedin className="w-12 h-12 text-teal-primary" />
              </Button>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-y-2 max-lg:text-center">
            <span>
              marketing@bikinpeta.com
            </span>
            <span className="cursor-pointer" onClick={handleWhatsAppAction}>(+62) 815-7381-8878</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-32 max-lg:text-center max-lg:mx-16 max-md:mx-7">
        <p className="py-9 text-sm text-gray-400">2025 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
