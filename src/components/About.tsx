import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './About.scss'

const About: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="about padded-section" id="about">
            <div className="content">
                <h2 className="title-blue">{t('about-title')}</h2>
                <p className="text-grey"><Trans i18nKey={'about-description'}></Trans></p>
                <a className="button-outlined-grey" href="https://cfes.ca/">{t('about-visit')}</a>
            </div>
        </section>
    )
}

export default About