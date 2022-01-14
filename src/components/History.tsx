import React from 'react';
import './History.scss';
import HistoryCard from './HistoryCard';

const History: React.FC = () => {

    const historyList = [
        {
            title: 'Congress',
            year: 1975,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
        },
        {
            title: 'Congress',
            year: 1994,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
        },
        {
            title: 'CEC',
            year: 2005,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
        },
        {
            title: 'Congress',
            year: 2016,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
        },
        {
            title: 'CEC',
            year: 2017,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
        },
        {
            title: 'CDE',
            year: 2020,
            content: 'The Canadian Engineering Leadership Conference (CELC) is an annual, bilingual, student-run conference that attracts over 200 student leaders from 46 universities across the country.'
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