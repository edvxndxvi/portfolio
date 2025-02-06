import Image from 'next/image';
import { useTranslations } from 'next-intl';

import fiap from '../../public/images/fiap.jpg';
import senac from '../../public/images/senac.jpg';

export const Educations = () => {
    const t = useTranslations('Educations');

    const educations = [
        { id: 1, title: t('meritScholarship.title'), date: '2024', organizationLogo: fiap, orgName: 'FIAP' },
        { id: 2, title: t('fiap.course'), date: '2024 - 12/2025', organizationLogo: fiap, orgName: 'FIAP' },
        { id: 3, title: t('senac.course'), date: '2022 - 2023', organizationLogo: senac, orgName: 'SENAC' },
    ];

      
    return (
       <ul>
            {educations.map((education) => (
            <li key={education.id} className="professional-item group">
                <div >
                    <Image src={education.organizationLogo} alt={education.orgName} className='rounded-[4px] min-w-11 max-w-11'/>
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