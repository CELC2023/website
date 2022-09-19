import React, { useState } from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import HeaderLogo from "../images/header-logo.svg";
import NavToggleIcon from "../images/icons/menu-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./NavBar.scss";
import { languages as langConsts } from "../utils/languageConstants";
import { localizedPrefix } from "../utils/localizationUtils";

const NavBar: React.FC = () => {
  const { language, languages, originalPath} = useI18next()
  const { t } = useTranslation();
  const [mobileNavigationToggle, setMobileNavigationToggle] = useState<boolean>(false); 

  const navBarLinks = [
    {
      text: t('navbar-home'),
      url: localizedPrefix('/#top'),
      class: 'navbar-link'
    }, {
      text: t('navbar-about'),
      url: localizedPrefix('/#about'),
      class: 'navbar-link'
    }, {
      text: t('navbar-history'),
      url: localizedPrefix('/#history'),
      class: 'navbar-link'
    }, {
      text: t('navbar-why'),
      url: localizedPrefix('/#sponsor'),
      class: 'navbar-link'
    }, {
      text: t('navbar-faq'),
      url: localizedPrefix('/#faq'),
      class: 'navbar-link'
    },/* {
      text: t('navbar-contact'),
      url: localizedPrefix('/#contact')
    } */
  ]

  return (
    <header>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={mobileNavigationToggle} onClick={() => setMobileNavigationToggle(!mobileNavigationToggle)}>
        <img src={NavToggleIcon} />
        <span className="sr-only">Menu</span>
      </button>
      <nav className="primary-navigation" data-visible={mobileNavigationToggle} >
        <ul className="navigation-bar flex" onClick={() => mobileNavigationToggle && setMobileNavigationToggle(false)}>
          {
            navBarLinks.map((l, i) => {
              return (
                <li key={`navcont-${i}`} className={l.class || ''}>
                  <AnchorLink className="all-caps nav-text" to={l.url} stripHash title={l.text} />
                </li>
              )
            })
          }
          <li key={`navcont-logo`} className="navbar-logo" >
            <AnchorLink className="logo-link" stripHash to="/#top" >
              <img src={HeaderLogo} draggable={false} />
            </AnchorLink>
          </li>
          {
          languages.map((lang) => {
            if(lang !== language) {
              return (
                <li key={`navcont-ls-${lang}`} className="navbar-lang">
                  <Link className="language-toggle all-caps" to={originalPath} language={lang} key={lang}>
                    {langConsts[lang]}
                  </Link>
                </li>
               
              )
            }
          })
        }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar