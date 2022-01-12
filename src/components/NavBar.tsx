import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import HeaderLogo from "../images/header-logo.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar: React.FC = () => {
  const { language, languages, originalPath} = useI18next()
  const { t } = useTranslation();

  return (
    <header>
      <nav className="navigation-bar">
        <AnchorLink to="/#top" stripHash title={t('navbar-home')}/>
        <AnchorLink to="/#about" stripHash title={t('navbar-about')}/>
        <AnchorLink to="/#history" stripHash title={t('navbar-history')}/>
        <AnchorLink to="/#sponsor" stripHash title={t('navbar-why')} />
        <AnchorLink to="/#faq" stripHash title={t('navbar-faq')} />
        {/* <AnchorLink to="/#contact" stripHash title={t('navbar-contact')} /> */}
        <AnchorLink className="logo-link" stripHash to="/#top" >
          <img src={HeaderLogo} draggable={false} />
        </AnchorLink>
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

export default NavBar