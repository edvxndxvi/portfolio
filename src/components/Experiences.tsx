import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from "motion/react"

import blueshift from '../../public/images/blueshift.jpg';
import bradesco from '../../public/images/bradesco.jpg';
import gigroup from '../../public/images/gigroup.jpg';

export const Experiences = () => {
    const t = useTranslations('Experiences');

    const experiences = [
        { id: 1, role: t('blueshift.role'), period: t('blueshift.period'), companyLogo: blueshift, companyName: 'Blueshift' },
        { id: 2, role: t('bradesco.role'), period: t('bradesco.period'), companyLogo: bradesco, companyName: 'Bradesco' },
        { id: 3, role: t('gigroup.role'), period: t('gigroup.period'), companyLogo: gigroup, companyName: 'Gi Group' },
    ];

      
    return (
       <ul>
            {experiences.map((experience) => (
            <motion.li 
                key={experience.id} className="professional-item group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div>
                    <Image src={experience.companyLogo} alt={experience.companyName} className='rounded-[4px] min-w-11 max-w-11'/>
                </div>
                <div>
                    <p className="font-medium text-lg text-text">{experience.role}</p>
                    <p className="text-sm text-text-gray">{experience.period}</p>
                </div>
            </motion.li>
            ))}
       </ul>
    )
}        