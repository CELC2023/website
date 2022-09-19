import React from "react";
import { useTranslation } from "react-i18next";
import "./HowToAttend.scss";

const HowToAttend: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="padded-section how-attend-section">
            <div className="how-attend-band-container">
                <div className="how-attend-red-band" />
                <div className="how-attend-yellow-band" />
            </div>
            <div className="title">
                <h2 className="title-blue">{t('attend-title')}</h2>
            </div>
            <div className="content">
                <p>{t('attend-answer')}</p>
            </div>
        </section>
    )
}

export default HowToAttend;