import React from 'react';
import { useTranslation } from 'react-i18next';
import './Sponsor.scss';
import Booth from '../images/icons/booth.svg';
import Resumes from '../images/icons/resumes.svg';
import Present from '../images/icons/present.svg';
import Handbook from '../images/icons/handbook.svg';
import Tower from '../images/icons/tower.svg';
import Banquet from '../images/icons/banquet.svg';
import Fade from 'react-reveal/Fade';
import { string } from 'prop-types';

const Sponsor: React.FC = () => {
    const {t} = useTranslation();

    interface SponsorCard {
        textKey: string
        image: any
    }

    const sponsorCards: Array<SponsorCard> = [
        {
            textKey: 'sponsor-career',
            image: Booth
        }, {
            textKey: 'sponsor-delegate',
            image: Resumes
        }, {
            textKey: 'sponsor-session',
            image: Present
        }, {
            textKey: 'sponsor-handbook',
            image: Handbook
        }, {
            textKey: 'sponsor-logo',
            image: Tower
        }, {
            textKey: 'sponsor-banquet',
            image: Banquet
        }
    ]

    return (
        <section className="sponsor padded-section" id="sponsor">
            <Fade bottom>
                <div className="title">
                    <h2 className="title-blue">{t('sponsor-title')}</h2>
                </div>
                <div className="content">
                    <div className="perk-cards">
                        {
                            sponsorCards.map((c, i) => {
                                return (
                                    <div className="card">
                                        <img className="perk-icon" src={c.image} />
                                        <p className='all-caps'>{t(c.textKey)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="package-info">
                        <p>{t('sponsor-desc')}</p>
                        <a className="button-outlined-grey sponsor-package" href='https://drive.google.com/uc?export=download&id=1N5d6qZwl7zeDMn0v7fdZ2LmNrvQDOmCm'>{t('sponsor-button')}</a>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Sponsor;