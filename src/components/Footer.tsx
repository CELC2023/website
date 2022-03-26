import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "./Footer.scss"

const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="text">
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
