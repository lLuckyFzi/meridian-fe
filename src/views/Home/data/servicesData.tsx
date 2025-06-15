import { BiRuler } from "react-icons/bi";
import ServicesMeasurement from "../../../../public/img/services-measurement.png";
import ServicesTopography from "../../../../public/img/services-topography.png";
import ServicesDrone from "../../../../public/img/services-drone.png";
import ServicesGeogprahy from "../../../../public/img/services-geography.png";
import { FaRulerCombined } from "react-icons/fa6";
import { MdMap } from "react-icons/md";
import { PiDroneFill } from "react-icons/pi";
import { HiCpuChip } from "react-icons/hi2";

export const ServicesData = [
    {
        id: 1,
        icon: <FaRulerCombined className="w-10 h-10 text-white" /> ,
        img: ServicesMeasurement,
        title: "Pengukuran Lahan",
        description: "Pengukuran akurat untuk menentukan batas lahan, perencanaan pembangunan, serta pengembangan area sesuai kebutuhan."
    },
    {
        id: 2,
        icon: <MdMap className="w-10 h-10 text-white" /> ,
        img: ServicesTopography,
        title: "Pengukuran Topografi",
        description: "Pemetaan permukaan tanah untuk mendukung perencanaan infrastruktur seperti jalan, jembatan, hingga gedung bertingkat."
    },
    {
        id: 3,
        icon: <PiDroneFill className="w-10 h-10 text-white" /> ,
        img: ServicesDrone,
        title: "Foto Udara & LIDAR",
        description: "Pemotretan udara menggunakan drone dan teknologi LIDAR untuk menghasilkan citra presisi tinggi dan data topografi detail."
    },
    {
        id: 4,
        icon: <HiCpuChip className="w-10 h-10 text-white" /> ,
        img: ServicesGeogprahy,
        title: "Sistem Informasi Geografis (SIG)",
        description: "Pengelolaan data special berbasis GIS yang terintegrasi, memudahkan analisis, perencanaan, dan pengambil keputusan."
    },
]