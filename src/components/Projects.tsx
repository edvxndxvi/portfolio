import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from "motion/react"

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

import tapdano from '../../public/images/tapdano.jpg';
import wattwise from '../../public/images/wattwise.jpg';
import bikehub from '../../public/images/bikehub.jpg';


export const Projects = () => {
    const t = useTranslations('Projects');

    const projects = [
        {id: 1, image: tapdano, name: 'TapDano', desc: t('tapdano') , tecnologys: ['React', 'TypeScript'], links: ['https://github.com/tapdano/tapdano/','https://tapdano.com/']},
        {id: 2, image: wattwise, name: 'WattWise', desc:t('wattwise'), tecnologys: ['NextJs', 'TypeScript', 'Tailwind CSS'], links: ['https://github.com/edvxndxvi/wattwise','https://wattwise-delta.vercel.app/visaoGeral']},
        {id: 3, image: bikehub, name: 'BikeHub', desc: t('bikehub'), tecnologys: ['HTML', 'CSS', 'JavaScript'], links: ['https://github.com/edvxndxvi/bikehub','https://edvxndxvi.github.io/bikehub/']},
    ];

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-10'>
            {projects.map((project) => (
                <motion.li 
                    key={project.id} 
                    className='group border-[1px] hover:border-2 border-border hover:border-text-gray rounded-2xl w-full transition-all'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <div className="overflow-hidden rounded-t-2xl">
                        <Image 
                            src={project.image} 
                            alt={project.name} 
                            className='rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105'
                        />
                    </div>

                    <div className='px-[10px] py-5 grid gap-5'>
                        <h3 className='text-2xl font-medium'>{project.name}</h3>
                        <p className='md:text-center text-text-gray' >{project.desc}</p>

                        <ul className='text-text font-medium flex flex-wrap gap-5'>
                            {project.tecnologys.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>

                        <div className='flex flex-row flex-wrap gap-5'>
                            <a href={project.links[0]} className='project-btn' target='_blank'><FontAwesomeIcon icon={faGithub} className='text-xl text-text'/>Github</a>
                            <a href={project.links[1]} className='project-btn' target='_blank'><FontAwesomeIcon icon={faDisplay} className='text-lg text-text'/>Deploy</a>
                        </div>
                    </div>
                </motion.li>
            ))}
        </ul>
    )
}        