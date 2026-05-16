import AboutSection from "@/src/sections/home/AboutSection";
import Features from "@/src/sections/home/Features";
import Hero from "@/src/sections/home/Hero";
import ProductSection from "@/src/sections/home/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Hero/>
        <Features/>
        <ProductSection/>
        <AboutSection/>
      </>
  );
}
