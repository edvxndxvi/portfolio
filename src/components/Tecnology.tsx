'use client';
import Image from 'next/image';

import jsIcon from '../../public/svg/javascriptIcon.svg';
import reactIcon from '../../public/svg/reactIcon.svg';
import nextIcon from '../../public/svg/nextjsIcon.svg';
import sassIcon from '../../public/svg/sassIcon.svg';
import tailwindIcon from '../../public/svg/tailwindIcon.svg';
import figmaIcon from '../../public/svg/figmaIcon.svg';
import { useEffect, useState } from 'react';

export const Tecnology = () => {
    const tecnologys = [
        {id: 1, name: 'JavaScript', icon: jsIcon},
        {id: 2, name: 'React', icon: reactIcon},
        {id: 3, name: 'NextJs', icon: nextIcon},
        {id: 4, name: 'Sass', icon: sassIcon},
        {id: 5, name: 'Tailwind CSS', icon: tailwindIcon},
        {id: 6, name: 'Figma', icon: figmaIcon},
    ];

    const [isLightTheme, setIsLightTheme] = useState<boolean | null>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsLightTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
        }
    }, []);
      
    return (
        <ul className='grid grid-cols-3 grid-rows-2 min-[550px]:grid-cols-6 min-[600px]:grid-rows-1  gap-10'>
            {tecnologys.map((tecnology) => (
                <li key={tecnology.id} className={`cursor-pointer transition-all hover:saturate-100 ${isLightTheme ? 'brightness-[0.18] saturate-0 hover:brightness-100 ' : 'saturate-0 brightness-50 hover:brightness-100'}`}>
                    <Image src={tecnology.icon} alt={tecnology.name}/>
                </li>
            ))}

        </ul>
    )
}        