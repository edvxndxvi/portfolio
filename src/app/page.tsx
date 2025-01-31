'use client';
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Tecnology } from "@/components/Tecnology";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    
    if (typeof window !== 'undefined') { 
      const selectedTheme = localStorage.getItem("theme");

      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
      } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
      } else{
        document.body.classList.add("light");
      }
    }
  }, []);

  return (
    <>
      <Navbar/>

      <main className="max-w-[1440px] mx-auto">
        <section className="px-4 max-w-[1440px] relative mx-auto overflow-hidden lg:overflow-visible">
          
          {/* Spotlight Effect Elements */}
          <div className="bg-[#448FCD] spotlight h-[550px] -top-96 right-32 sm:right-80 lg:right-[430px] animate-spotlight2 animation-delay-2000" ></div>
          <div className="bg-[#3A6DD3] spotlight h-[500px] -top-32 right-24 sm:right-56 lg:right-[350px] animate-spotlight"></div>
          <div className="bg-[#7A9EE6] spotlight h-[575px] -top-56 -right-12 sm:right-0 lg:right-32 animate-spotlight animation-delay-1000"></div>

          {/* Hero Content */}
          <div className="pt-36 min-[600px]:pt-72 grid place-items-center gap-20 text-center">
            <div className="grid gap-4">
              <h1 className="text-6xl min-[600px]:text-8xl font-bold ">Edvan Davi</h1>
              <p className="text-3xl min-[600px]:text-4xl font-medium">Desenvolvedor Front-End</p>
              <button className="btn">Download CV</button>
            </div>

            <div className="grid gap-7">
              <h2 className="text-2xl font-medium bg-gradient-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text ">Experiência Com</h2>
              <div className="grid ">
              <Tecnology/>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 md:py-64 px-4">
          <h1 className="text-text-gray text-4xl font-medium text-center mb-20">Meus Últimos <span className="text-text">Projetos</span></h1>
          <Projects/>
        </section>
      </main>
    </>
  );
}
