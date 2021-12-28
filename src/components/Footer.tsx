import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "./Footer.scss"

const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="decoration"></div>
      <div className="text">
        <div>
          <span>{t('footer-land')}</span>
          <span className="divider">|</span>
          <span>{t('footer-ucalgary')}</span>
          <span className="divider">|</span>
          <span>{t('footer-cfes')}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
