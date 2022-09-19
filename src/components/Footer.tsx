import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "./Footer.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { localizedPrefix } from "../utils/localizationUtils";

const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="links">
        <div className="link-group">
          <p className="group-header">General</p>
          <a className="footer-link">Organizing Team</a>
          <AnchorLink className="footer-link" to={localizedPrefix('#history')} stripHash title="Other Calgary Conferences" />
          <a className="footer-link">Land Acknowledgement</a>
        </div>
        <div className="link-group">
          <p className="group-header">Delegation</p>
          <a className="footer-link">Incident Reporting Committee (IRC)</a>
          <a className="footer-link">Bilingualism</a>
        </div>
        <div className="link-group">
          <p className="group-header">Support</p>
          <a className="footer-link">General Inquiry</a>
          <a className="footer-link">CELC-Hot Line</a>
          <a className="footer-link">Sponsorship Support</a>
          <a className="footer-link">VPX Support</a>
          <a className="footer-link">Contact CFES</a>
        </div>
        <div className="link-group">
          <p className="group-header">Other Resources</p>
          <a className="footer-link">Mental Health Resources</a>
          <a className="footer-link">LGBTQIA2+ Resources</a>
          <a className="footer-link">Women In Engineering Resources</a>
          <a className="footer-link">Sustainability Resources</a> 
        </div>
      </div>
      <div className="banner">
      <span className="footer-text-primary">{t('footer-land')}</span>
        <span className="divider">|</span>
        <a className="footer-text-secondary footer-link" href="https://ucalgary.ca">{t('footer-ucalgary')}</a>
        <span className="divider">|</span>
        <a className="footer-text-secondary footer-link" href="https://cfes.ca">{t('footer-cfes')}</a>
      </div>
    </footer>
  )
}

export default Footer
