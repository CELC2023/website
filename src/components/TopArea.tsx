import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import useWindowSize from '../hooks/useWindowSize';
import './TopArea.scss'

const TopArea: React.FC = () => {
    const {t} = useTranslation();
    const {language} = useI18next();

    const imageBase = 'https://res.cloudinary.com/celc/image/upload';

    const window = useWindowSize();

    const transform = () => {
        if(window.width >= 2700) {
            return '/';
        } else if(window.width >= 1440) {
            return '/c_scale,w_1440';
        } else if(window.width <=900) {
            return '/c_crop,q_auto:good,h_1.0,w_900';
        } else {
            return '/c_scale,w_1080';
        }
    }

    const images = [
        {
            url: '/v1646548113/celc2023-static/elliston-park.png',
            location: t('title-image-elliston')
        }, {
            url:'/v1641965733/celc2023-static/jasper-national-park.png',
            location: t('title-image-jasper')
        }, {
            url:'/v1641965712/celc2023-static/st-patricks-island.png',
            location: t('title-image-stpatrick-island')
        }, {
            url:'/v1641965814/celc2023-static/drumheller.png',
            location: t('title-image-drumheller')
        }, {
            url: '/v1641965692/celc2023-static/lake-minnewanja.png',
            location: t('title-image-lakeminnewanka')
        }, {
            url: '/v1641965758/celc2023-static/maligne-canyon.png',
            location: t('title-image-malignecanyon')
        }
    ]

    const localizedPrefix = (link: string) => {
        if(language === 'en') {
          return link;
        } else {
          return `/${language}${link}`
        }
      }

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
                <div 
                className='image-pane' 
                style={{
                    width: `${images.length * 100}vw`,
                    transform: `translateX(-${imageIndex * 100}vw)`,
                    transition: `${imageIndex !== 0 ? '1s ease-in-out' : ''}`}}>
                    {
                        images.map((e, i) => {
                            return (
                                <div className='title-image-slide' key={i} style={{backgroundImage: `url(${imageBase}${transform()}${e.url})` }} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="information-card">
                <div className="card-header">
                    <h2 className='title-text'><Trans i18nKey={'title-text'}></Trans></h2>
                    <h4 className='title-showcase-text'>{t('title-showcase')}</h4>
                </div>
                <p className='card-body'>{t('title-description')}</p>
                <div className="card-actions">
                    <a className="button-solid-red" href='mailto:chairs@celc.cfes.ca' target='_blank'>{t('title-partner')}</a>
                    <AnchorLink className="button-outlined-grey" to={localizedPrefix('/#about')} stripHash title={t('title-learn')} />
                    {/* <a className="button-outlined-grey" href=''>{t('title-learn')}</a> */}
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