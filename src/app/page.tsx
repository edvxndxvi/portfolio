'use client';
import { Navbar } from "@/components/Navbar";
import { Tecnology } from "@/components/Tecnology";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add("dark");
    } else{
      document.body.classList.add("light");
    }
  }, []);

  return (
    <>
      <Navbar/>
      <section className="px-4 pb-16 relative max-w-7xl mx-auto overflow-hidden lg:overflow-visible">
        {/* Spotlight Effect Elements */}
        <div className="absolute bg-[#448FCD] w-1/6 h-[550px] min-[600px]:w-28 min-[600px]:h-[600px] rounded-full rotate-[25deg] -top-96 right-32 sm:right-80 lg:right-[430px] -z-50 blur-2xl sm:blur-3xl animate-spotlight2 animation-delay-2000" ></div>
        <div className="absolute bg-[#3A6DD3] w-1/6 h-[500px] min-[600px]:w-28 min-[600px]:h-[600px] rotate-[25deg] -top-48 right-24 sm:right-56 lg:right-[350px] -z-50 filter blur-2xl sm:blur-3xl animate-spotlight"></div>
        <div className="absolute bg-[#7A9EE6] w-1/6 h-[575px] min-[600px]:w-24 min-[600px]:h-[600px] rotate-[25deg] -top-80 -right-12 sm:right-0 lg:right-32  -z-50 filter blur-2xl sm:blur-3xl animate-spotlight animation-delay-1000"></div>

        <div className="pt-36 min-[600px]:pt-72 grid place-items-center gap-20 text-center">
          <div className="grid gap-4">
            <h1 className="text-6xl min-[600px]:text-8xl font-bold ">Edvan Davi</h1>
            <p className="text-3xl min-[600px]:text-4xl font-medium">Desenvolvedor Front-End</p>
            <button className="px-8 py-4 bg-glass border-glass border-[1px] text-text w-fit place-self-center rounded-2xl hover:bg-glass-active">Download CV</button>
          </div>

          <div className="grid gap-7">
            <h2 className="text-2xl font-medium bg-gradient-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text ">Experiência Com</h2>
            <div className="grid ">
            <Tecnology/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
