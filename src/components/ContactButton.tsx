import {useTranslations} from 'next-intl';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactButton = () => {
    const t = useTranslations('Contact');

    const subject = t('subject');
    const body = t('body');

    return (
        <a href={`mailto:edvandavi1@hotmail.com?subject=${subject}?body=${body}`} className="btn pr-4 relative group overflow-hidden">
            <span className="relative pr-7">{t('button')}</span>
            <div aria-hidden="true" className="absolute right-8 -top-2 text-2xl transition duration-300 -translate-y-7 group-hover:translate-y-6">
                <div className="flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
                <div className="h-20 flex items-center justify-center -rotate-45">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </a>
    )
}        