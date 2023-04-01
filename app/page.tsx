import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container relative mx-auto">
      <Navbar />
      <HeroSection />
    </main>
  );
}
