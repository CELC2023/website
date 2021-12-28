import React from 'react';
import { useTranslation } from 'react-i18next';
import './Faq.scss';
import FaqItem, { faq } from './FaqItem';

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
            <h2 className="title-blue">FAQ</h2>
            <div className="faq-body">
                <div className="faq-container">
                    {
                        questions.map((q: faq) => (
                            <FaqItem faq={q} key={q.question} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQ;