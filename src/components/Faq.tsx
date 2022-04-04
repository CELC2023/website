import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './Faq.scss';
import FaqItem, { faq } from './FaqItem';
import Fade from "react-reveal/Fade";

const FAQ: React.FC = () => {
    const {t} = useTranslation();

    const questions: faq[] = [
        {
            question: t('faq-looking-text'),
            custom: <Trans i18nKey={'faq-looking-answer'}>Yes! Reach out to us to start the discussion at <a href='mailto:sponsorship.future@celc.cfes.ca'>sponsorship.future@celc.cfes.ca</a>.</Trans>
        }, {
            question: t('faq-flex-text'),
            answer: t('faq-flex-answer')
        }, {
            question: t('faq-cfes-text'),
            custom: <Trans i18nKey={'faq-cfes-answer'}>The Canadian Federation of Engineering Students is a bilingual organization that represents all 85,000 engineering students across Canada. Through advocacy, partnerships and hosting conferences (such as this one), the CFES continues to make an impact by improving engineering student lives. Learn more about the CFES by visiting their website at <a href='https://cfes.ca'>cfes.ca</a>.</Trans>
        }, {
            question: t('faq-attend-text'),
            answer: t('faq-attend-answer')
        }, {
            question: t('faq-workshop-text'),
            custom: <Trans i18nKey={'faq-workshop-answer'}>CELC 2023 will include up to 40 sessions across 3 streams. This includes hands-on workshops, panels and even a case competition! If you are interested in getting involved, reach out to our programming team at <a href='mailto:chair.future@celc.cfes.ca'>chair.future@celc.cfes.ca</a>.</Trans>
        }, {
            question: t('faq-organize-text'),
            custom: <Trans i18nKey={'faq-organize-answer'}>CELC 2023 is always accepting volunteers to help plan our conference. Whether that's on day-to-day operations or supporting our bilingual services. Reach out to us at <a href='mailto:chair.future@celc.cfes.ca'>chair.future@celc.cfes.ca</a>.</Trans>
        }
    ]

    return (
        <section className="faq padded-section" id="faq">
            <Fade bottom>
                <h2 className="title-blue">FAQ</h2>
                <div className="faq-body">
                    <div className="faq-container">
                        {
                            questions.map((q: faq, i: number) => (
                                <FaqItem faq={q} key={i} />
                            ))
                        }
                    </div>
                    <div className='faq-image-container'>
                        <div className='top-row'>
                            <img className='top-left' src={`https://res.cloudinary.com/celc/image/upload/v1648062494/celc2023-static/47200189372_e59d672810_o_1_vzwrk2.png`} />
                            <img className='top-right' src={`https://res.cloudinary.com/celc/image/upload/v1648062493/celc2023-static/39437270551_88ff2b7d71_k_1_quth3e.png`} />
                        </div>
                        <div className='bottom-row'>
                            <img className='bottom-left' src={`https://res.cloudinary.com/celc/image/upload/v1648062492/celc2023-static/49697560688_f3a071fb2b_o_1_qlyfqi.png`} />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default FAQ;