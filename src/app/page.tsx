import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { Directions } from "@/components/Directions";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Schedule } from "@/components/Schedule";
import { Stats } from "@/components/Stats";
import { Ticker } from "@/components/Ticker";
import { Trainer } from "@/components/Trainer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Directions />
        <Schedule />
        <Pricing />
        <About />
        <Trainer />
        <Gallery />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
