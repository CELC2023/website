import React from "react"
import "./Sponsors.scss"
import { useTranslation } from "react-i18next"
import Fade from "react-reveal/Fade"

enum SponsorshipLevels {
  Platinum = "sponsor-platinum",
  Gold = "sponsor-gold",
  Silver = "sponsor-silver",
  Partner = "sponsor-partner",
  Bronze = "sponsor-bronze",
  Other = "sponsor-other",
}

interface Sponsor {
  name: string
  logo: string
  url?: string
}

interface SponsorData {
  platinum?: Array<Sponsor>
  gold?: Array<Sponsor>
  silver?: Array<Sponsor>
  partner?: Array<Sponsor>
  bronze?: Array<Sponsor>
  other?: Array<Sponsor>
}

interface SponsorTierProps {
  sponsors: Array<Sponsor>
  level: SponsorshipLevels
}

const SponsorLogo: React.FC<Sponsor> = ({ name, logo, url = "" }) => {
  return (
    <div className="sponsor-logo">
      {
        url === "" ? 
        <img src={logo} alt={name} id={name.replace(/ /g, "").toLowerCase()} />
        :
        <a href={url} target={'_blank'}>
         <img src={logo} alt={name} id={name.replace(/ /g, "").toLowerCase()} /> 
        </a>
      }
    </div>
  )
}

const SponsorTier: React.FC<SponsorTierProps> = ({ sponsors, level }) => {
  const { t } = useTranslation()
  return (
    <div className={`tier-listing ${level.toString()}`}>
      <Fade bottom>
        <h2 className="sponsor-level">{t(level.toString())}</h2>
        <div className="sponsor-logos">
          {sponsors.map(s => {
            return (
              <SponsorLogo {...s} logo={s.logo} key={s.name} />
            )
          })}
        </div>
      </Fade>
    </div>
  )
}

const Sponsors: React.FC = () => {
  const { t } = useTranslation()

  const SponsorList: SponsorData = {
    partner: [
      {
        name: "TC Energy",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944791/celc2023-static/logos/tcenergy_qfkxvp.png",
      },
      {
        name: "Schulich School of Engineering",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/sse_wod07m.png",
      },
    ],
    platinum: [
      {
        name: "Arcurve",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944787/celc2023-static/logos/arcurve_bu9qvk.png",
      },
      {
        name: "ESS",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/ess_kp8vn3.png",
      },
      {
        name: "Graham Construction",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/graham_tir3g5.png",
      },
      {
        name: "Spartan Controls",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/spartancontrols_ssbzdv.png",
      },
    ],
    gold: [
      {
        name: "ACEC",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944787/celc2023-static/logos/acec_omctq6.png",
      },
      {
        name: "AtlasCopco",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944787/celc2023-static/logos/atlascopco_hcovik.png",
      },
      {
        name: "Cisco",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/cisco_ewbwla.png",
      },
      {
        name: "McElhanney",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944789/celc2023-static/logos/mcelhanney_a4ghue.png",
      },
      {
        name: "WSP",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944791/celc2023-static/logos/wsp_ldtkci.png",
      },
      {
        name: "CIMA+",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/cima_imyqmb.png",
      },
    ],
    silver: [
      {
        name: "APEGA",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944787/celc2023-static/logos/apega_srgsl9.png",
      },
      {
        name: "Borea Construction",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944787/celc2023-static/logos/borea_bpn14j.png",
      },
      {
        name: "Engineers Canada",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/engineerscanada_pikomg.png",
      },
      {
        name: "Kewit",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/kewit_ne5tcg.png",
      },
      {
        name: "Pathways Alliance",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/pathwaysalliance_dd36es.png",
      },
      {
        name: "SLB",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/slb_bjbyrl.png",
      },
      {
        name: "Western University",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944791/celc2023-static/logos/westernuniversity_k3zuon.png",
      },
    ],
    bronze: [
      {
        name: "Esri",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944788/celc2023-static/logos/esri_j3hlyp.png",
      },
      {
        name: "NSERC",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/nserc_ulbuqu.png",
      },
      {
        name: "Synopsys",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944791/celc2023-static/logos/synopsys_z5r8pi.png",
      },
    ],
    other: [
      {
        name: "PWC",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944790/celc2023-static/logos/pwc_z5rrql.png",
      },
      {
        name: "Sticker Mule",
        logo: "https://res.cloudinary.com/celc/image/upload/v1674944791/celc2023-static/logos/stickermule_sc5xhp.png",
        url: "https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_medium=referral&utm_campaign=CANADIANENGINEERINGLEADERSHIP2023"
      },
    ],
  }

  return (
    <section className="sponsors padded-section" id="sponsors">
      <Fade bottom>
        <h2 className="title-blue">{t("sponsor-current")}</h2>
      </Fade>
      <div className="sponsors-listing">
        {SponsorList.partner && SponsorList.partner?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Partner}
            sponsors={SponsorList.partner}
          />
        )}
        {SponsorList.platinum && SponsorList.platinum?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Platinum}
            sponsors={SponsorList.platinum}
          />
        )}
        {SponsorList.gold && SponsorList.gold?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Gold}
            sponsors={SponsorList.gold}
          />
        )}
        {SponsorList.silver && SponsorList.silver?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Silver}
            sponsors={SponsorList.silver}
          />
        )}
        {SponsorList.bronze && SponsorList.bronze?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Bronze}
            sponsors={SponsorList.bronze}
          />
        )}
        {SponsorList.other && SponsorList.other?.length > 0 && (
          <SponsorTier
            level={SponsorshipLevels.Other}
            sponsors={SponsorList.other}
          />
        )}
      </div>
    </section>
  )
}

export default Sponsors
