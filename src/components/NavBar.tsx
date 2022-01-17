import React, { useState } from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import HeaderLogo from "../images/header-logo.svg";
import NavToggleIcon from "../images/icons/menu-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const { language, languages, originalPath} = useI18next()
  const { t } = useTranslation();
  const [mobileNavigationToggle, setMobileNavigationToggle] = useState<boolean>(false);

  const navBarLinks = [
    {
      text: t('navbar-home'),
      url: '/#top'
    }, {
      text: t('navbar-about'),
      url: '/#about'
    }, {
      text: t('navbar-history'),
      url: '/#history'
    }, {
      text: t('navbar-why'),
      url: '/#sponsor'
    }, {
      text: t('navbar-faq'),
      url: '/#faq'
    },/* {
      text: t('navbar-contact'),
      url: '/#contact'
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
                <li key={`navcont-${i}`}>
                  <AnchorLink to={l.url} stripHash title={l.text} />
                </li>
              )
            })
          }
          <li key={`navcont-logo`}>
            <AnchorLink className="logo-link" stripHash to="/#top" >
              <img src={HeaderLogo} draggable={false} />
            </AnchorLink>
          </li>
          {
          languages.map((lang) => {
            if(lang !== language) {
              return (
                <li key={`navcont-ls-${lang}`}>
                  <Link className="language-toggle" to={originalPath} language={lang} key={lang}>
                    {lang}
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