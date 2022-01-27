import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "./Footer.scss"

const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="text">
        <span>{t('footer-land')}</span>
        <span className="divider">|</span>
        <span>{t('footer-ucalgary')}</span>
        <span className="divider">|</span>
        <span>{t('footer-cfes')}</span>
      </div>
    </footer>
  )
}

export default Footer
