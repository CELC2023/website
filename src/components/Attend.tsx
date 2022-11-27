import React from 'react';
import { useTranslation } from 'react-i18next';
import './Attend.scss';
import Booth from '../images/icons/booth.svg';
import CFESLogo from '../images/icons/cfes-logo.svg';
import Present from '../images/icons/present.svg';
import Handbook from '../images/icons/handbook.svg';
import Tower from '../images/icons/tower.svg';
import Banquet from '../images/icons/banquet.svg';
import Fade from 'react-reveal/Fade';

const Attend: React.FC = () => {
    const {t} = useTranslation();

    interface AttendCard {
        textKey: string
        image: any
    }

    const attendCards: Array<AttendCard> = [
        {
            textKey: 'attend-career-fair',
            image: Booth
        }, {
            textKey: 'attend-learn-cfes',
            image: CFESLogo
        }, {
            textKey: 'attend-session-count',
            image: Present
        }, {
            textKey: 'attend-case-comp',
            image: Handbook
        }, {
            textKey: 'attend-ab-economy',
            image: Tower
        }, {
            textKey: 'attend-events',
            image: Banquet
        }
    ]

    return (
        <section className="attend padded-section" id="attend">
            <Fade bottom>
                <div className="title">
                    <h2 className="title-blue">{t('attend-why')}</h2>
                </div>
                <div className="content">
                    <div className="perk-cards">
                        {
                            attendCards.map((c, i) => {
                                return (
                                    <div className="card" key={i}>
                                        <img className="perk-icon" src={c.image} />
                                        <p className='all-caps'>{t(c.textKey)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Attend;