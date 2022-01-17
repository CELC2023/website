import React from 'react';
import { useTranslation } from 'react-i18next';
import './History.scss';
import HistoryCard from './HistoryCard';

const History: React.FC = () => {

    const {t} = useTranslation();


    const historyList = [
        {
            title: 'Congress',
            year: 1975,
            content: t('history-75congress')
        },
        {
            title: 'Congress',
            year: 1994,
            content: t('history-94congress')
        },
        {
            title: 'CEC',
            year: 2005,
            content: t('history-05cec')
        },
        {
            title: 'Congress',
            year: 2016,
            content: t('history-16congress')
        },
        {
            title: 'CEC',
            year: 2017,
            content: t('history-17cec')
        },
        {
            title: 'CDE',
            year: 2020,
            content: t('history-20cde')
        },
    ]

    return (
        <section className="history" id="history">
            <div className="title padded-section">
                <h2>Conferences in <span className="emphasize">History</span></h2>
            </div>
            <div className="content-container">
                <div className="content">
                    {
                        historyList.map((h) => {
                            return <HistoryCard content={h.content} key={h.title+h.year.toFixed(0)} title={h.title} year={h.year} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default History