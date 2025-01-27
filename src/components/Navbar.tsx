
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
            <div className='relative'>
                <button className='menu-btn md:hidden' onClick={toggleMenu}><FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars}  className='text-[24px] place-self-center'/></button>
                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="flex flex-col md:flex-row gap-10 items-center">
                        <li><a href="#" className="hover:text-text-gray transition-colors cursor-pointer">Projetos</a></li>
                        <li><a href="#" className="hover:text-text-gray transition-colors cursor-pointer">Sobre</a></li>
                        <li><a href="#" className="hover:text-text-gray transition-colors cursor-pointer">Contato</a></li>
                    </ul>
                    <ul className="flex gap-5 items-center">
                        <li className='flex items-center'><FontAwesomeIcon icon={faGithub} className='text-2xl text-text hover:text-text-gray transition-colors cursor-pointer'/></li>
                        <li className='flex items-center'><FontAwesomeIcon icon={faLinkedin} className='text-2xl text-text hover:text-text-gray transition-colors cursor-pointer'/></li>
                        <li className="text-glass select-none">|</li>
                        <li><Image src={brasilFlag} alt='Flag' className='max-w-none'/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}        