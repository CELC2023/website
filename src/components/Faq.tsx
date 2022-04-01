import React from 'react';
import { useTranslation } from 'react-i18next';
import './Faq.scss';
import FaqItem, { faq } from './FaqItem';
import Fade from "react-reveal/Fade";

const FAQ: React.FC = () => {
    const {t} = useTranslation();

    const questions: faq[] = [
        {
            question: t('faq-looking-text'),
            answer: t('faq-looking-answer')
        }, {
            question: t('faq-flex-text'),
            answer: t('faq-flex-answer')
        }, {
            question: t('faq-cfes-text'),
            answer: t('faq-cfes-answer')
        }, {
            question: t('faq-attend-text'),
            answer: t('faq-attend-answer')
        }, {
            question: t('faq-workshop-text'),
            answer: t('faq-workshop-answer')
        }, {
            question: t('faq-organize-text'),
            answer: t('faq-organize-answer') 
        }
    ]

    return (
        <section className="faq padded-section" id="faq">
            <Fade bottom>
                <h2 className="title-blue">FAQ</h2>
                <div className="faq-body">
                    <div className="faq-container">
                        {
                            questions.map((q: faq) => (
                                <FaqItem faq={q} key={q.question} />
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