import { Inter, Montserrat } from 'next/font/google'
import Home from 'meridian@/views/Home/Home'

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main
      className={`${inter.variable} ${montserrat.variable} antialiased`}
    >
      <Home />
    </main>
  )
}
