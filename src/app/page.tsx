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
      <section className="px-4 pb-16">
        {/* Spotlight Effect Elements */}
        <div></div>
        <div></div>
        <div></div>

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
