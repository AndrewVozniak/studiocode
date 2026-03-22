"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TechStack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
