import React from 'react';
import './Sponsors.scss';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

enum SponsorshipLevels {
    Platinum = "sponsor-platinum",
    Gold = "sponsor-gold",
    Silver = "sponsor-silver",
    Partner = "sponsor-partner",
    Bronze = "sponsor-bronze",
    Other = "sponsor-other",
}

interface Sponsor {
    name: string,
    logo: string
}

interface SponsorData {
    platinum?: Array<Sponsor>,
    gold?: Array<Sponsor>,
    silver?: Array<Sponsor>,
    partner?: Array<Sponsor>,
    bronze?: Array<Sponsor>,
    other?: Array<Sponsor>,
}

interface SponsorTierProps {
    sponsors: Array<Sponsor>,
    level: SponsorshipLevels,
}

const SponsorLogo: React.FC<Sponsor> = ({name, logo}) => {
    return (
        <div className='sponsor-logo'>
            <img src={logo} alt={name} id={name.replace(/ /g, "").toLowerCase()} />
        </div>
    )
}

const SponsorTier: React.FC<SponsorTierProps> = ({sponsors, level}) => {
    const ImagePrefix = "https://celcassets.cfes.ca/logos/"
    const {t} = useTranslation();
    return (
        <div className={`tier-listing ${level.toString()}`}>
            <h2 className='sponsor-level'>{t(level.toString())}</h2>
            <div className='sponsor-logos'>
                {
                    sponsors.map((s) => {
                        return (
                            <SponsorLogo {...s} logo={ImagePrefix+s.logo} key={s.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Sponsors: React.FC = () => {
    const {t} = useTranslation();

    
    const SponsorList: SponsorData = {
        partner: [{
            name: "TC Energy",
            logo: 'tcenergy.png'
        }, {
            name: "Schulich School of Engineering",
            logo: 'sse.png'
        }],
        platinum: [{
            name: 'Arcurve',
            logo: 'arcurve.png'
        }, {
            name: "ESS",
            logo: 'ess.png'
        }, {
            name: 'Graham Construction',
            logo: 'graham.png'
        }, {
            name: 'Spartan Controls',
            logo: 'spartancontrols.png'
        }],
        gold: [{
            name: 'ACEC',
            logo: 'acec.png'
        }, {
            name: 'AtlasCopco',
            logo: 'atlascopco.png'
        }, {
            name: 'Cisco',
            logo: 'cisco.png'
        }, {
            name: 'McElhanney',
            logo: 'mcelhanney.png'
        },{
            name: 'WSP',
            logo: 'wsp.png'
        },{
            name: 'CIMA+',
            logo: 'cima.png'
        }],
        silver: [{
            name: 'APEGA',
            logo: 'apega.png'
        }, {
            name: 'Borea Construction',
            logo: 'borea.png'
        }, {
            name: 'Engineers Canada',
            logo: 'engineerscanada.png'
        }, {
            name: 'Kewit',
            logo: 'kewit.png'
        }, {
            name: 'Pathways Alliance',
            logo: 'pathwaysalliance.png'
        }, {
            name: 'SLB',
            logo: 'slb.png'
        }, {
            name: 'Western University',
            logo: 'westernuniversity.png'
        }],
        bronze: [{
            name: 'Esri',
            logo: 'esri.png'
        }, {
            name: 'NSERC',
            logo: 'nserc.png'
        }, {
            name: 'Sticker Mule',
            logo: 'stickermule.png'
        }, {
            name: 'Synopsys',
            logo: 'synopsys.png'
        }], 
        other: [{
            name: "PWC",
            logo: "pwc.png"
        }]
    }

    return (
        <Fade bottom>
            <section className="sponsors padded-section" id="sponsors">
                <h2 className="title-blue">{t('sponsor-current')}</h2>
                <div className='sponsors-listing'>
                    {
                        SponsorList.partner && SponsorList.partner?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Partner} sponsors={SponsorList.partner} />
                    }
                    {
                        SponsorList.platinum && SponsorList.platinum?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Platinum} sponsors={SponsorList.platinum} />
                    }
                    {
                        SponsorList.gold && SponsorList.gold?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Gold} sponsors={SponsorList.gold} />
                    }
                    {
                        SponsorList.silver && SponsorList.silver?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Silver} sponsors={SponsorList.silver} />
                    }
                    {
                        SponsorList.bronze && SponsorList.bronze?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Bronze} sponsors={SponsorList.bronze} />
                    }
                    {
                        SponsorList.other && SponsorList.other?.length >0 && 
                        <SponsorTier level={SponsorshipLevels.Other} sponsors={SponsorList.other} />
                    }
                </div>
            </section>
        </Fade>
    )
}

export default Sponsors;