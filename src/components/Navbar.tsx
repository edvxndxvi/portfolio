import { useState } from 'react';
import Image from 'next/image';

import brasilFlag from '../../public/svg/brazil-flag.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-10 w-full flex justify-end md:justify-center z-40">
            <div className='relative font-medium'>
                <button className='menu-btn md:hidden' onClick={toggleMenu}><FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars}  className='text-[24px] place-self-center'/></button>
                <nav className={`navbar${isMenuOpen ? ' active' : ''}`}>
                    <ul className="flex flex-col md:flex-row gap-10 items-center">
                        <li><a href="#projects" className="hover:text-text-gray transition-colors cursor-pointer">Projetos</a></li>
                        <li><a href="#" className="hover:text-text-gray transition-colors cursor-pointer">Sobre</a></li>
                        <li><a href="#" className="hover:text-text-gray transition-colors cursor-pointer">Contato</a></li>
                    </ul>
                    <ul className="flex gap-5 items-center">
                        <li className='flex items-center'><a href="https://github.com/edvxndxvi" target='_blank'><FontAwesomeIcon icon={faGithub} className='navbar-icon'/></a></li>
                        <li className='flex items-center'><a href="https://www.linkedin.com/in/edvan-davi-119970236/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='navbar-icon'/></a></li>
                        <li className="text-text opacity-25 select-none">|</li>
                        <li className='cursor-pointer hover:saturate-0 transition-all'><Image src={brasilFlag} alt='Flag' className='max-w-none'/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}        