import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Bands.scss';
import BandArrow from '../images/icons/band-arrow.svg';
import UpArrow from '../images/icons/up-arrow.svg';
import FooterImage from '../images/bands-bottom.svg';

const Bands: React.FC = () => {
    const {t} = useTranslation();
    const [bandView, setBandView] = useState<string>('');
    useEffect(() => {
        console.log(bandView)
    }, [])

    return (
        <section className='bands' id='bands'>
            <div className="title padded-section">
                <h2 className="title-black">{t('bands-title')}</h2>
            </div>
            <div className="body band-container">
                <div className={`band-area ${bandView === '' ? '' : `${bandView}-view`}`}>
                    <div className="band" id="sustainability-outer">
                        <p id="sustainability-band" onClick={() => setBandView('sustainability')}>{t('bands-sustinability')}
                            <img src={UpArrow} className='band-expand-arrow arrow-right' />
                        </p>
                        <div className='content-area sustainability flex'>
                            <h2 className='all-caps band-content-header'>{t('bands-sustinability')}</h2>
                            <p>The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.

The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. </p>
                            <img src={BandArrow} className='control control-left' onClick={() => {setBandView('')}} />
                        </div>
                    </div>
                    <div className="band" id="technology-outer">
                        <p id="technology-band" onClick={() => setBandView('technology')}>{t('bands-tech')}
                            <img src={UpArrow} className='band-expand-arrow arrow-right' />
                        </p>
                        <div className='content-area technology flex'>
                            <h2 className='all-caps band-content-header'>{t('bands-tech')}</h2>
                            <p>The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.

The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. </p>
                            <img src={BandArrow} className='control control-down' onClick={() => {setBandView('')}} />
                        </div>
                    </div>
                    <div className='band' id='diversity-container'>
                        <div id='diversity-bottom-left' />
                        <p id="diversity-band" onClick={() => setBandView('diversity')}>{t('bands-diversity')}
                            <img src={UpArrow} className='band-expand-arrow arrow-left' />
                        </p>
                        <div id='diversity-bottom-right' />
                        <div id='diversity-top-right' />
                        <div id='diversity-top' />
                        <div className='content-area diversity flex'>
                            <h2 className='all-caps band-content-header'>{t('bands-diversity')}</h2>
                            <p>The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.

The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country. </p>
                            <img src={BandArrow} className='control control-up' onClick={() => {setBandView('')}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img className='footer-image' src={FooterImage} />
            </div>
        </section>
    )
}

export default Bands;