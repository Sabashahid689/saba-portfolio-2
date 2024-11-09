"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

// main page
export default function Home() {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);
  
 return (
    <main>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
        
  );
}
