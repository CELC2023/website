import React from 'react';
import { useTranslation } from 'react-i18next';
import './Bands.scss';

const Bands: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className='bands' id='bands'>
            <div className="title padded-section">
                <h2 className="title-black">{t('bands-title')}</h2>
            </div>
            <div className="body band-container">
                <div className="band" id="sustainability-outer">
                    <p id="sustainability-band">{t('bands-sustinability')}</p>
                </div>
                <div className="band" id="technology-outer">
                    <p id="technology-band">{t('bands-tech')}</p>
                </div>
                <div className="band" id="diversity-outer">
                    <p id="diversity-band">{t('bands-diversity')}</p>
                </div>
            </div>
            <div className="footer">
            </div>
        </section>
    )
}

export default Bands;