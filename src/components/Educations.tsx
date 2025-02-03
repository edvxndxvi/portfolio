'use client';
import Image from 'next/image';

import fiap from '../../public/images/fiap.jpg';
import senac from '../../public/images/senac.jpg';

export const Educations = () => {
    const educations = [
        {id: 1, title: '1º Lugar Bolsa Mérito - FIAP', date: '2024', organizationLogo: fiap},
        {id: 2, title: 'Análise e Desenvolvimento de Sistemas - FIAP', date: '2024 - 2025', organizationLogo: fiap},
        {id: 3, title: 'Técnico em Informática para Internet - SENAC', date: '2022 - 2023', organizationLogo: senac},
    ];
      
    return (
       <ul>
            {educations.map((education) => (
            <li key={education.id} className="flex items-center gap-2 py-5 border-glass border-y-[1px] first:border-none last:border-none group">
                <div className="w-11 h-11 rounded-sm">
                    <Image src={education.organizationLogo} alt="JavaScript"/>
                </div>
                <div>
                    <p className="font-medium text-lg text-text">{education.title}</p>
                    <p className="text-sm text-text-gray">{education.date}</p>
                </div>
            </li>
            ))}
       </ul>
    )
}        