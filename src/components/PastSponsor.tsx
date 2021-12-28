import React from 'react';
import './PastSponsor.scss';
import Solace from '../images/solace.png';
import Colab from '../images/colab.png';
import Verafin from '../images/verafin.png';
import Kraken from '../images/kraken.png';
import Pomerleau from '../images/Pomerleau-logo.png';
import { useTranslation } from 'react-i18next';


const PastSponsor: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="past-sponsor padded-section">
            <h2 className="title-blue">{t('sponsor-past')}</h2>
            <div>
                <div className="past-sponsor-list">
                    <img src={Solace}/>
                    <img src={Colab}/>
                    <img src={Verafin}/>
                    <img src={Kraken}/>
                    <img src={Pomerleau}/>
                </div>
                <p className="more-sponsors">{t('sponsor-more')}</p>
            </div>
        </section>
    )
}

export default PastSponsor;