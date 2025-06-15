import { GiProcessor } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiChartLineBold } from "react-icons/pi";
import { RiSpeakAiFill } from "react-icons/ri";

export const skillsData = [
  {
    id: 1,
    icon: (
      <RiSpeakAiFill className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "Pengetahuan Teknis Mendalam",
    description:
      "Kami didukung oleh tim ahli dengan pemahaman komprehensif di bidang geodesi, pemetaan, dan survei tanah. Menguasai teknik pengukuran, pengoperasian alat survei canggih, serta perangkat lunak pemetaan terkini untuk memastikan hasil yang akurat dan presisi.",
  },
  {
    id: 2,
    icon: (
      <HiMiniUserGroup className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "Kolaborasi Tim yang Solid",
    description:
      "Kekuatan kami ada pada sinergi tim yang profesional. Dengan penguasaan perangkat lunak pemetaan (GIS) dan kemampuan integrasi data spasial yang andal, kami mampu memberikan solusi geospasial yang efektif, efisien, dan tepat sasaran.",
  },
  {
    id: 3,
    icon: (
      <PiChartLineBold className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "Analisis Data yang Akurat dan Teruji",
    description:
      "Kami mampu mengolah berbagai sumber data menjadi informasi yang akurat, relevan, dan mudah digunakan. Keahlian analisis dan interpretasi data kami mendukung pengambilan keputusan strategis dalam berbagai proyek pengembangan.",
  },
  {
    id: 4,
    icon: (
      <GiProcessor className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "Teknologi Terkini & Terdepan",
    description:
      "Kami selalu mengikuti perkembangan teknologi terbaru di bidang geospasial. Dengan dukungan perangkat dan sistem mutakhir, kami menjamin hasil pengukuran dan pemetaan yang presisi tinggi, minim risiko, dan memaksimalkan efisiensi proyek Anda.",
  },
];
