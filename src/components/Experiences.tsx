'use client';
import Image from 'next/image';

import blueshift from '../../public/images/blueshift.jpg';
import bradesco from '../../public/images/bradesco.jpg';
import gigroup from '../../public/images/gigroup.jpg';

export const Experiences = () => {
    const experiences = [
        {id: 1, role: 'Dev. Front End - Blueshift', time: 'Setembro 2024 - Atual', companyLogo: blueshift},
        {id: 2, role: 'Dev. Front End - Bradesco (Terceirizado)', time: 'Setembro 2024 - Atual', companyLogo: bradesco},
        {id: 3, role: 'Aprendiz TI - Help Desk - Gi Group Holding', time: 'Jun 2023 - Setembro 2024', companyLogo: gigroup},
    ];
      
    return (
       <ul>
            {experiences.map((experience) => (
            <li key={experience.id} className="flex items-center gap-2 py-5 border-border border-y-[1px] first:border-none last:border-none group">
                <div className="w-11 h-11 rounded-sm">
                    <Image src={experience.companyLogo} alt="JavaScript"/>
                </div>
                <div>
                    <p className="font-medium text-lg text-text">{experience.role}</p>
                    <p className="text-sm text-text-gray">{experience.time}</p>
                </div>
            </li>
            ))}
       </ul>
    )
}        