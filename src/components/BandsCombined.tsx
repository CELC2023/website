import React, { useEffect, useState } from "react"
import { Trans, useTranslation } from "react-i18next"
import "./BandsCombined.scss"
import BandArrow from "../images/icons/band-arrow.svg"
import UpArrow from "../images/icons/up-arrow.svg"
import FooterImage from "../images/bands-bottom.svg"

const BandsCombined: React.FC = () => {
  const { t } = useTranslation()
  const [bandView, setBandView] = useState<string>("")

  return (
    <>
      <section className="bands">
      <div className="content padded-section about" id="about">
        <div className="about-text">
        <h2 className="title-blue">{t("about-title")}</h2>
          <p className="text-grey">
            <Trans i18nKey={"about-description"}></Trans>
          </p>
          <a className="button-outlined-grey" href="https://cfes.ca/">
            {t("about-visit")}
          </a>
        </div>
          <img className="about-canada-map" src="https://res.cloudinary.com/celc/image/upload/c_scale,q_auto:good,w_1920/v1646545009/celc2023-static/canada-map_t0ufpm_c3vr5p.png" />
        </div>
        <div className="body band-container">
          <div
            className={`band-area ${bandView === "" ? "" : `${bandView}-view`}`}
          >
            <h2 className="title-black bands-title">{bandView === "" ? t("bands-title") : ""}</h2>
            <div className="band" id="sustainability-outer">
              <div
                id="sustainability-band"
                className={`all-caps band-text-container ${bandView === '' ? '' : 'hidden'}`}
                onClick={() => setBandView("sustainability")}
              >
                {t("bands-sustinability")}
                <img src={UpArrow} className={`band-expand-arrow arrow-right ${bandView === '' ? '' : 'hidden'}`}/>
              </div>
              <div className={`content-area sustainability flex ${bandView === 'sustainability' ? '' : 'hidden'}`}>
                <h2 className="all-caps band-content-header">
                  {t("bands-sustinability")}
                </h2>
                <p>
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.{" "}
                </p>
                <img
                  src={BandArrow}
                  className="control control-left"
                  onClick={() => {
                    setBandView("")
                  }}
                />
              </div>
            </div>
            <div className="band" id="technology-outer">
              <div id="technology-band" className={`all-caps band-text-container ${bandView === '' ? '' : 'hidden'}`} onClick={() => setBandView("technology")}>
                {t("bands-tech")}
                <img src={UpArrow} className={`band-expand-arrow arrow-right ${bandView === '' ? '' : 'hidden'}`} />
              </div>
              <div className={`content-area technology flex ${bandView === 'technology' ? '' : 'hidden'}`}>
                <h2 className="all-caps band-content-header">
                  {t("bands-tech")}
                </h2>
                <p>
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.{" "}
                </p>
                <img
                  src={BandArrow}
                  className="control control-down"
                  onClick={() => {
                    setBandView("")
                  }}
                />
              </div>
            </div>
            <div className="band" id="diversity-container">
              <div id="diversity-bottom-left" />
              <div id="diversity-band" className={`all-caps band-text-container ${bandView === '' ? '' : 'hidden'}`} onClick={() => setBandView("diversity")}>
              <img src={UpArrow} className={`band-expand-arrow arrow-left ${bandView === '' ? '' : 'hidden'}`} />
                {t("bands-diversity")}
              </div>
              <div id="diversity-bottom-right" />
              <div id="diversity-top-right" />
              <div id="diversity-top" />
              <div className={`content-area diversity flex ${bandView === 'diversity' ? '' : 'hidden'}`}>
                <h2 className="all-caps band-content-header">
                  {t("bands-diversity")}
                </h2>
                <p>
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.
                  The Canadian Engineering Leadership Conference (CELC) is an
                  annual, bilingual, student-run conference that attracts over
                  200 student leaders from 46 universities across the country.{" "}
                </p>
                <img
                  src={BandArrow}
                  className="control control-up"
                  onClick={() => {
                    setBandView("")
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <img className={`footer-image ${bandView === 'sustainability' ? 'right-view': ''}`} src={FooterImage} />
        </div>
      </section>
    </>
  )
}

export default BandsCombined
