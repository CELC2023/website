import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './TopArea.scss'

const TopArea: React.FC = () => {
    const {t} = useTranslation();

    const images = [
        {
            url: 'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641688217/celc2023-static/header-banner.png',
            location: t('title-image-elliston')
        }, {
            url:'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641965733/celc2023-static/jasper-national-park.png',
            location: t('title-image-jasper')
        }, {
            url:'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641965712/celc2023-static/st-patricks-island.png',
            location: t('title-image-stpatrick-island')
        }, {
            url:'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641965814/celc2023-static/drumheller.png',
            location: t('title-image-drumheller')
        }, {
            url: 'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641965692/celc2023-static/lake-minnewanja.png',
            location: t('title-image-lakeminnewanka')
        }, {
            url: 'https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1080/v1641965758/celc2023-static/maligne-canyon.png',
            location: t('title-image-malignecanyon')
        }
    ]

    const [imageIndex, setImageIndex] = useState<number>(0);
    const timeout = useRef(null);
    const delay = 10000;

    useEffect(() => {
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(
            () =>setImageIndex((i) => i === images.length - 1 ? 0 : i + 1),
            delay
        )
        return () => { timeout.current && clearTimeout(timeout.current) }
    }, [imageIndex])

    return (
        
        <section className="top-area" id="top">
            <div className='title-image-container' >
                <div className='image-pane' style={{width: `${images.length * 100}vw`, transform: `translateX(-${imageIndex * 100}vw)`}}>
                    {
                        images.map((e, i) => {
                            return (
                                <div className='title-image-slide' key={i} style={{backgroundImage: `url(${e.url})` }} />
                            )
                        })
                    }
                </div>
            </div>
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
                    <p className="location descriptor">{t('title-downtown')}</p>
                    <p className="date descriptor" >{t('title-date')}</p>
                </div>
            </div>
            <p className="location-tag">{images[imageIndex].location}</p>
        </section>
    )
}

export default TopArea