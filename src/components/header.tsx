import React from "react"
import PropTypes from "prop-types"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import HeaderLogo from "../images/header-logo.svg";

const Header: React.FC = () => {
  const { language, languages, originalPath} = useI18next()
  const { t } = useTranslation();

  return (
    <header>
      <nav className="navigation-bar">
        <a href="#">{t('navbar-home')}</a>
        <a href="#about">{t('navbar-about')}</a>
        <a href="#history">{t('navbar-history')}</a>
        <a href="#sponsor">{t('navbar-why')}</a>
        <a href="#faq">{t('navbar-faq')}</a>
        <a href="#contact">{t('navbar-contact')}</a>
        <a className="logo-link" href="#">
          <img src={HeaderLogo} />
        </a>
        {
          languages.map((lang) => {
            if(lang !== language) {
              return (
                <Link className="language-toggle" to={originalPath} language={lang} key={lang}>
                  {lang}
                </Link>
              )
            }
          })
        }
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header