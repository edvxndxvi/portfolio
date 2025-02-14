'use client';

import {useTranslations} from 'next-intl';
import { motion } from "motion/react"
import { useState } from "react"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactButton = () => {
    const t = useTranslations('Contact');

    const [copied, setCopied] = useState(false);
    const email = "edvandavi1@hotmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        } catch (error) {
            console.error("Erro ao copiar o email:", error);
        }
    };
   
    return (
        <motion.button 
            onClick={handleCopy}
            className="btn pr-4 relative group overflow-hidden"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <span className="relative pr-7">{copied ? t('copied') : t('button')}</span>
            <div aria-hidden="true" className="absolute right-8 -top-2 text-2xl transition duration-300 -translate-y-7 group-hover:translate-y-6">
                <div className="flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
                <div className="h-20 flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </motion.button>
    )
}        