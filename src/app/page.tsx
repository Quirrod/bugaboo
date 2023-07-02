import Badge from "@/components/badge/Badge";
import { About } from "./home/About";
import { Hero } from "./home/Hero";
import { Services } from "./home/Services";
import { Steps } from "./home/Steps";
import CustomButton from "@/components/interactive/CustomButton";
import Image from "next/image";
import codeImage from "@/assets/images/cuteBoo3.jpg";
import { CodeCard } from "@/components/cards/CodeCard";
import { Codes } from "./home/Codes";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Steps />
      {/* <Codes /> */}
    </main>
  );
}
