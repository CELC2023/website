import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"

import type { PageProps } from "gatsby"
import "../styles/common.scss"
import "../styles/livecelc.scss"
import TagContent from "../components/TagContent"
import TagLink from "../components/TagLink"
import TagHeader from "../components/TagHeader"
import firebase from "gatsby-plugin-firebase"
import { useI18next } from "gatsby-plugin-react-i18next"
import { Delegate } from "../interfaces/delegate"
import DisneyCharacter from "../components/DisneyCharacter"

const TagsPage: React.FC<PageProps> = (props: PageProps) => {
  const [user, setUser] = useState<string>("")
  const [data, setData] = useState<Delegate | null>(null)

  const { t } = useI18next()
  useEffect(() => {
    if (typeof window !== undefined) {
      const item = localStorage.getItem("user")
      if (item !== null) {
        setUser(item)
      }
    }
  }, [])

  useEffect(() => {
    if (user !== "") {
      firebase
        .database()
        .ref("/delegates/" + user)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() !== null) {
            setData(snapshot.val())
          }
        })
    }
  }, [user])

  const dynamicLinks = [
    {
      title: "Food Crawl Guide",
      start: 1672876800,
      stop: 1672988400,
      to: "",
    },
    {
      title: "Greta Venue Information",
      start: 1672851600,
      stop: 1672902000,
      to: "",
    },
    {
      title: "Twisted Venue Information",
      start: 1673136000,
      to: "",
    },
    {
      title: "Career Fair Map + Companies",
      start: 1672934400,
      stop: 1672952400,
      to: "",
    },
    {
      title: "Rajveer Venue Information PDF",
      start: 1672876800,
      stop: 1673074800,
      to: "",
    },
    {
      title: "Case Comp Judging Schedule",
      start: 1673114400,
      to: "",
    }
  ]

  const staticLinks = [
    {
      text: t("link-schedule"),
      url: "https://celc.cfes.ca/schedule",
      frurl: "https://celc.cfes.ca/programme",
      icon: null,
    },
    {
      text: t("link-programming-package"),
      url: "https://celc.cfes.ca/programming",
      icon: null,
    },
    {
      text: t("link-delegate-package"),
      url: "https://celc.cfes.ca/delegate",
      frurl: "https://celc.cfes.ca/delegues",
      icon: null,
    },
    {
      text: t("link-irc"),
      url: "https://cfes.ca/irc",
      frurl: "https://cfes.ca/irc",
      icon: null,
    },
    {
      text: t("link-website"),
      url: "https://celc.cfes.ca/",
      frurl: "ttps://celc.cfes.ca/fr",
      icon: null,
    },
    {
      text: t("link-instagram"),
      url: "https://instagram.com/celc.ccli",
      icon: null,
    },
    {
      text: t("link-discord"),
      url:
        "https://discord.com/channels/1000686343761973338/1000687646756057210",
      icon: null,
    },
  ]

  return (
    <div className="tag-container">
      <TagHeader name={data?.first || ""} />
      {/* { data?.character && Date.now() >= 1672696800 * 1000 && Date.now() <= 1672851600 * 1000 && ( */}
      {true && (
        <DisneyCharacter title={t('header-disney-character')} name={data?.character || ""} />
      )}
      <TagContent title={t("header-dynamic-links")}>
        <>
          {dynamicLinks
            .filter(e => {
              return true
              // if (
              //   e.start * 1000 <= Date.now() &&
              //   (e.stop == undefined || e.stop * 1000 <= Date.now())
              // ) {
              //   return true
              // } 
              // return false
            })
            .map((e, i) => (
              <TagLink text={e.title} key={i} url={e.to || "#"} />
            ))}
        </>
      </TagContent>
      <TagContent title={t("header-information")}>
        <>
          {staticLinks.map((e, i) => (
            <TagLink text={e.text} url={e.url || "#"} key={i} />
          ))}
        </>
      </TagContent>
      {data?.caseCompGroup && Date.now() >= 1672786800 * 1000 && (
        <TagContent title={t('header-case-comp')}>
          <p>{data.caseCompGroup}</p>
        </TagContent>
      )}
    </div>
  )
}

export default TagsPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
