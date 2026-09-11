'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import jsIcon from '../../public/svg/javascriptIcon.svg';
import reactIcon from '../../public/svg/reactIcon.svg';
import nextIcon from '../../public/svg/nextjsIcon.svg';
import sassIcon from '../../public/svg/sassIcon.svg';
import tailwindIcon from '../../public/svg/tailwindIcon.svg';
import figmaIcon from '../../public/svg/figmaIcon.svg';

export const Tecnology = () => {
  const tecnologys = [
    { id: 1, name: 'JavaScript', icon: jsIcon },
    { id: 2, name: 'React', icon: reactIcon },
    { id: 3, name: 'NextJs', icon: nextIcon },
    { id: 4, name: 'Sass', icon: sassIcon },
    { id: 5, name: 'Tailwind CSS', icon: tailwindIcon },
    { id: 6, name: 'Figma', icon: figmaIcon },
  ];

  return (
    <ul className="grid grid-cols-3 grid-rows-2 min-[550px]:grid-cols-6 min-[600px]:grid-rows-1 gap-10">
      {tecnologys.map((tecnology) => (
        <motion.li
          key={tecnology.id}
          className="cursor-pointer transition-all saturate-0 brightness-[0.18] dark:brightness-50 hover:saturate-100 hover:brightness-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image src={tecnology.icon} alt={tecnology.name} />
        </motion.li>
      ))}
    </ul>
  );
};
