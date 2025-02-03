'use client';
import Image from 'next/image';

import blueshift from '../../public/images/blueshift.jpg';
import bradesco from '../../public/images/bradesco.jpg';
import gigroup from '../../public/images/gigroup.jpg';

export const Experiences = () => {
    const experiences = [
        {id: 1, role: 'Dev. Front End - Blueshift', time: 'Setembro 2024 - Atual', companyLogo: blueshift, companyName: 'Blueshift'},
        {id: 2, role: 'Dev. Front End - Bradesco (Terceirizado)', time: 'Setembro 2024 - Atual', companyLogo: bradesco, companyName: 'Bradesco'},
        {id: 3, role: 'Aprendiz TI - Help Desk - Gi Group Holding', time: 'Jun 2023 - Setembro 2024', companyLogo: gigroup, companyName: 'GiGroup'},
    ];
      
    return (
       <ul>
            {experiences.map((experience) => (
            <li key={experience.id} className="professional-item group">
                <div className="w-11 h-11">
                    <Image src={experience.companyLogo} alt={experience.companyName} className='rounded-md'/>
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