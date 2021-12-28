import React from 'react';
import { useTranslation } from 'react-i18next';
import './Sponsor.scss';
import Booth from '../images/icons/booth.svg';
import Resumes from '../images/icons/resumes.svg';
import Present from '../images/icons/present.svg';
import Handbook from '../images/icons/handbook.svg';
import Tower from '../images/icons/tower.svg';
import Banquet from '../images/icons/banquet.svg'

const Sponsor: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="sponsor padded-section" id="sponsor">
            <div className="title">
                <h2 className="title-black">{t('sponsor-title')}</h2>
            </div>
            <div className="content">
                <div className="perk-cards">
                    <div className="card">
                        <p>{t('sponsor-career')}</p>
                        <img className="perk-icon" src={Booth} />
                    </div>
                    <div className="card">
                        <p>{t('sponsor-delegate')}</p>
                        <img className="perk-icon" src={Resumes} />
                    </div>
                    <div className="card">
                        <p>{t('sponsor-session')}</p>
                        <img className="perk-icon" src={Present} />
                    </div>
                    <div className="card">
                        <p>{t('sponsor-handbook')}</p>
                        <img className="perk-icon" src={Handbook} />
                    </div>
                    <div className="card">
                        <p>{t('sponsor-logo')}</p>
                        <img className="perk-icon" src={Tower} />
                    </div>
                    <div className="card">
                        <p>{t('sponsor-banquet')}</p>
                        <img className="perk-icon" src={Banquet} />
                    </div>
                </div>
                <div className="package-info">
                    <p>{t('sponsor-desc')}</p>
                    <a className="button-outlined-grey">{t('sponsor-button')}</a>
                </div>
            </div>
        </section>
    )
}

export default Sponsor;