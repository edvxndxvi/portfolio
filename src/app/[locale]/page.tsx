'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

import { ContactButton } from '@/components/ContactButton';
import { Educations } from '@/components/Educations';
import { Experiences } from '@/components/Experiences';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Tecnology } from '@/components/Tecnology';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadCVButton } from '@/components/DownloadCVButton';

export default function Home() {
  const t = useTranslations('Home');
  const lastestProjects = t.raw('latestProjects');
  const aboutTitle = t.raw('aboutTitle');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const selectedTheme = localStorage.getItem('theme');

      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.add('light');
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-360 mx-auto overflow-hidden lg:overflow-visible">
        <section className="px-4 max-w-360 relative mx-auto overflow-hidden lg:overflow-visible">
          {/* Spotlight Effect Elements */}
          <div className="bg-[#448FCD] spotlight h-137.5 -top-96 right-32 sm:right-80 lg:right-102.5 animate-spotlight2 animation-delay-2000"></div>
          <div className="bg-[#3A6DD3] spotlight h-125 -top-32 right-24 sm:right-56 lg:right-87.5 animate-spotlight"></div>
          <div className="bg-[#7A9EE6] spotlight h-143.75 -top-56 -right-12 sm:right-0 lg:right-32 animate-spotlight animation-delay-1000"></div>

          {/* Hero Content */}
          <div className="pt-36 min-[600px]:pt-72 grid place-items-center gap-20 text-center">
            <div className="grid gap-4">
              <motion.h1
                className="text-6xl min-[600px]:text-8xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Edvan Davi
              </motion.h1>
              <motion.p
                className="text-3xl min-[600px]:text-4xl font-medium"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t('role')}
              </motion.p>
              <DownloadCVButton />
            </div>

            <div className="grid gap-7">
              <motion.h2
                className="text-2xl font-medium bg-linear-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t('experienceWith')}
              </motion.h2>
              <div className="grid">
                <Tecnology />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 md:py-64 px-4">
          <motion.h2
            className="text-text-gray text-4xl font-medium text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {lastestProjects?.[0]}
            <span className="text-text">{lastestProjects?.[1]}</span>
          </motion.h2>
          <Projects />
        </section>

        {/* About Section */}
        <section id="about" className="pb-16 md:pb-64 px-4 grid gap-28 lg:gap-16">
          {/* Overview */}
          <div>
            <motion.h2
              className="text-text-gray font-medium text-4xl text-center max-w-150 mx-auto"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {aboutTitle?.[0]}
              <span className="text-text">{aboutTitle?.[1]}</span>
              {aboutTitle?.[2]}
              <span className="text-text">UX/UI design</span>
            </motion.h2>
            <motion.p
              className="text-text-gray text-center max-w-250 mx-auto text-lg my-10"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t('aboutText')}
            </motion.p>

            <div className="flex sm:flex-row flex-col gap-12 sm:gap-24 justify-center">
              <motion.div
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-6xl text-text font-medium relative">
                  <span className="absolute text-4xl font-semibold -top-2 -left-6">+</span>3
                </p>
                <span className="inline-block text-text-gray font-medium">{t('yearsExperience')}</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-6xl text-text font-medium relative">
                  <span className="absolute text-4xl font-semibold -top-2 -left-6">+</span>
                  10
                </p>
                <span className="inline-block text-text-gray font-medium">{t('developedProjects')}</span>
              </motion.div>
            </div>
          </div>

          {/* Experiences and Educations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-10">
            <div className="grid gap-10">
              <motion.h3
                className="font-medium text-4xl bg-linear-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('experiencesTitle')}
              </motion.h3>
              <Experiences />
            </div>

            <div className="grid gap-10">
              <motion.h3
                className="font-medium text-4xl bg-linear-to-r from-text to-gradient-end inline-block text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('formationsAndMerits')}
              </motion.h3>
              <Educations />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16 pb-5 px-4 max-w-360 relative mx-auto overflow-hidden">
          {/* Spotlight Effect Elements */}
          <div className="bg-[#448FCD] spotlight-bottom h-137.5 -bottom-100 right-24 sm:right-80 lg:left-137.5 animate-spotlight-bottom2 animation-delay-2000"></div>
          <div className="bg-[#3A6DD3] spotlight-bottom h-125 -bottom-60 right-14 sm:right-56 lg:left-175 animate-spotlight-bottom"></div>
          <div className="bg-[#7A9EE6] spotlight-bottom h-143.75 -bottom-72 -right-16 sm:right-0 lg:left-232.5 animation-delay-1000 animate-spotlight-bottom"></div>

          {/* Contact Content */}
          <div className="grid gap-32">
            <div className="max-w-197.5 mx-auto text-center grid gap-8">
              <motion.h2
                className="font-medium text-5xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('contactTitle')}
              </motion.h2>
              <motion.p
                className="text-text-gray text-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t('contactText')}
              </motion.p>

              {/* Animated Button */}
              <ContactButton />
            </div>

            {/* Footer */}
            <footer className="flex justify-between flex-col-reverse min-[520px]:flex-row items-center gap-5">
              <div className="text-center min-[520px]:text-left">
                <p>{t('copyRight')}</p>
              </div>

              <div className="flex gap-5">
                <a href="https://github.com/edvxndxvi" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
                </a>
                <a href="https://www.linkedin.com/in/edvan-davi-119970236/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="navbar-icon" />
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
