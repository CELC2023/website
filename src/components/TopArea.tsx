import React from 'react'
import { useTranslation } from 'react-i18next'
import './TopArea.scss'

const TopArea: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="top-area" id="top">
            <div className="information-card">
                <div className="card-header">
                    <h2 className='title-text'>{t('title-text')}</h2>
                    <h4 className='title-showcase-text'>{t('title-showcase')}</h4>
                </div>
                <p className='card-body'>{t('title-description')}</p>
                <div className="card-actions">
                    <a className="button-solid-red" href='mailto:chairs.future@celc.cfes.ca' target='_blank'>{t('title-partner')}</a>
                    <a className="button-outlined-grey">{t('title-learn')}</a>
                </div>
                <div className="card-details">
                    <p className="location">{t('title-downtown')}</p>
                    <p className="date" >{t('title-date')}</p>
                </div>
            </div>
            <p className="location-tag">{t('title-image-location')}</p>
        </section>
    )
}

export default TopArea