'use client';
import { Educations } from "@/components/Educations";
import { Experiences } from "@/components/Experiences";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Tecnology } from "@/components/Tecnology";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <h1 className="text-6xl min-[600px]:text-8xl font-bold">Edvan Davi</h1>
              <p className="text-3xl min-[600px]:text-4xl font-medium">Desenvolvedor Front-End</p>
              <button className="btn">Download CV</button>
            </div>

            <div className="grid gap-7">
              <h2 className="text-2xl font-medium bg-gradient-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text">Experiência Com</h2>
              <div className="grid">
              <Tecnology/>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 md:py-64 px-4">
          <h2 className="text-text-gray text-4xl font-medium text-center mb-20">Meus Últimos <span className="text-text">Projetos</span></h2>
          <Projects/>
        </section>

        {/* About Section */}
        <section id="about" className="pb-32 md:pb-64 px-4 grid gap-28 lg:gap-16">
          {/* Overview */}
          <div>
            <h2 className="text-text-gray font-medium text-4xl text-center max-w-[600px] mx-auto">Sou um <span className="text-text">Desenvolvedor Web</span> apaixonado por <span className="text-text">UX/UI design</span></h2>
            <p className="text-text-gray text-center max-w-[1000px] mx-auto text-lg my-10">
              Com anos de experiência, crio interfaces intuitivas e personalizadas para web. Buscando constantemente novas tecnologias e tendências, garantindo que meus projetos estejam sempre atualizados e alinhados com as necessidades dos usuários.
            </p>

            <div className="flex sm:flex-row flex-col gap-12 sm:gap-24 justify-center">
              <div className="flex flex-col items-center gap-1">
                <p className="text-6xl text-text font-medium relative"><span className="absolute text-4xl font-semibold -top-2 -left-6">+</span>3</p>
                <span className="inline-block text-text-gray font-medium">Anos de Experiência</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-6xl text-text font-medium relative"><span className="absolute text-4xl font-semibold -top-2 -left-6">+</span>10</p>
                <span className="inline-block text-text-gray font-medium">Projetos Desenvolvidos</span>
              </div>
            </div>
          </div>
          
          {/* Experiences and Educations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-10">
            <div className="grid gap-10">
              <h3 className="font-medium text-4xl bg-gradient-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text">Experiências</h3>
              <Experiences/>
            </div>

            <div className="grid gap-10">
              <h3 className="font-medium text-4xl bg-gradient-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text">Formações e Méritos</h3>
              <Educations/>
            </div>
          </div>

        </section>

        {/* Contact Section */}
        <section id='contact' className="pb-5 px-4 max-w-[1440px] relative mx-auto overflow-hidden">

          {/* Spotlight Effect Elements */}
          <div className="bg-[#448FCD] spotlight-bottom h-[550px] -bottom-[400px] right-24 sm:right-80 lg:left-[550px] animate-spotlight-bottom2 animation-delay-2000" ></div>
          <div className="bg-[#3A6DD3] spotlight-bottom h-[500px] -bottom-60 right-14 sm:right-56 lg:left-[700px] animate-spotlight-bottom"></div>
          <div className="bg-[#7A9EE6] spotlight-bottom h-[575px] -bottom-72 -right-16 sm:right-0 lg:left-[930px] animation-delay-1000 animate-spotlight-bottom"></div>

          {/* Contact Content */}
          <div className="grid gap-32">
            <div className="max-w-[790px] mx-auto text-center grid gap-8">
              <h2 className="font-medium text-5xl">Pronto para conversar sobre o seu próximo projeto?</h2>
              <p className="text-text-gray text-xl">Deseja discutir uma oportunidade para criar algo incrível? Estou à disposição.</p>

              {/* Animated Button */}
              <a href='#' className="btn pr-4 relative group overflow-hidden">
                <span className="relative pr-7">Entrar em contato</span>
                <div aria-hidden="true" className="absolute right-8 -top-2 text-2xl transition duration-300 -translate-y-7 group-hover:translate-y-6">
                  <div className="flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </div>
                  <div className="h-20 flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </div>
                </div>
              </a>
            </div>

            {/* Footer */}
            <footer className="flex justify-between flex-col-reverse min-[520px]:flex-row items-center gap-5">
              <div className="text-center min-[520px]:text-left">
                <p>© 2025 Edvan Davi. Todos os Direitos Reservados.</p>
              </div>

              <div className="flex gap-5">
                <a href="https://github.com/edvxndxvi" target='_blank'><FontAwesomeIcon icon={faGithub} className='navbar-icon'/></a>
                <a href="https://www.linkedin.com/in/edvan-davi-119970236/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='navbar-icon'/></a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
