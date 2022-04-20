import React from 'react';
import './PastSponsor.scss';
import Solace from '../images/solace.png';
import Colab from '../images/colab.png';
import Verafin from '../images/verafin.png';
import Pomerleau from '../images/Pomerleau-logo.png';
import TD from '../images/td.png';
import Kiewit from '../images/kiewit.png'
import Hatch from '../images/hatch.png'
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';


const PastSponsor: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Fade bottom>
            <section className="past-sponsor padded-section">
                <h2 className="title-blue">{t('sponsor-past')}</h2>
                <div>
                    <div className="past-sponsor-list">
                        <img className="td-img" src={TD}/>
                        <img src={Kiewit}/>
                        <img src={Verafin}/>
                        <img src={Hatch}/>
                    </div>
                    <p className="more-sponsors">{t('sponsor-more')}</p>
                </div>
            </section>
        </Fade>
    )
}

export default PastSponsor;