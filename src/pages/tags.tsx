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
import ScheduleIcon from "../images/icons/schedule.svg"
import ProgrammingIcon from "../images/icons/programming.svg"
import PackageIcon from "../images/icons/package.svg"
import IRCIcon from "../images/icons/irc.svg"
import WebsiteIcon from "../images/icons/website.svg"
import InstagramIcon from "../images/icons/instagram.svg"
import DiscordIcon from "../images/icons/discord.svg"
import DriveIcon from "../images/icons/drive.svg"

const TagsPage: React.FC<PageProps> = (props: PageProps) => {
  const [user, setUser] = useState<string>("")
  const [data, setData] = useState<Delegate | null>(null)

  const { t, language, changeLanguage } = useI18next()

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
            if(snapshot.val()["language"] == "French") {
              changeLanguage('fr')
            }
          }
        })
    }
  }, [user])

  const dynamicLinks = [
    {
      title: "Food Crawl Guide",
      start: 1672876800,
      stop: 1672988400,
      url: "",
      frurl: "",
    },
    // {
    //   title: "Greta Venue Information",
    //   start: 1672851600,
    //   stop: 1672902000,
    //   url: "",
    // },
    // {
    //   title: "Twisted Venue Information",
    //   start: 1673136000,
    //   url: "",
    // },
    // {
    //   title: "Career Fair Map + Companies",
    //   start: 1672934400,
    //   stop: 1672952400,
    //   url: "",
    // },
    // {
    //   title: "Rajveer Venue Information PDF",
    //   start: 1672876800,
    //   stop: 1673074800,
    //   url: "",
    // },
    // {
    //   title: "Case Comp Judging Schedule",
    //   start: 1673114400,
    //   url: "",
    // },
  ]

  const staticLinks = [
    {
      text: t("link-schedule"),
      url: "https://celc.cfes.ca/schedule",
      frurl: "https://celc.cfes.ca/programme",
      icon: ScheduleIcon,
    },
    {
      text: t("link-programming-package"),
      url: "https://celc.cfes.ca/programming",
      frurl: "https://celc.cfes.ca/programme",
      icon: ProgrammingIcon,
    },
    {
      text: t("link-delegate-package"),
      url: "https://celc.cfes.ca/delegate",
      frurl: "https://celc.cfes.ca/delegues",
      icon: PackageIcon,
    },
    {
      text: t("link-irc"),
      url: "https://celc.cfes.ca/irc",
      frurl: "https://celc.cfes.ca/irc",
      icon: IRCIcon,
    },
    {
      text: t("link-website"),
      url: "https://celc.cfes.ca/",
      frurl: "ttps://celc.cfes.ca/fr",
      icon: WebsiteIcon,
    },
    {
      text: t("link-instagram"),
      url: "https://instagram.com/celc.ccli",
      icon: InstagramIcon,
    },
    {
      text: t("link-discord"),
      url:
        "https://discord.com/channels/1000686343761973338/1000687646756057210",
      icon: DiscordIcon,
    },
    {
      text: t("link-public-drive"),
      url:
        "https://drive.google.com/drive/folders/1BZKbB9WBa5qEaCADlIHn4kmbnePtzEw9?usp=share_link",
      icon: DriveIcon,
    },
  ]

  return (
    <div className="tag-container">
      <TagHeader name={data?.first || ""} />
      {data?.character && Date.now() >= 1672696800 * 1000 && (
        <DisneyCharacter
          title={t("header-disney-character")}
          name={data?.character || ""}
        />
      )}
      <TagContent title={t("header-dynamic-links")}>
        <>
          {dynamicLinks
            .filter(e => {
              if (
                e.start * 1000 <= Date.now() &&
                (e.stop == undefined || e.stop * 1000 <= Date.now())
              ) {
                return true
              }
              return false
            })
            .map((e, i) => {
              const url = e.url || "#"
              const frurl = e.frurl || e.url || ""
              const localizedUrl = language === "en" ? url : frurl
              return (
                <TagLink text={e.title} key={i} url={localizedUrl || "#"} />
              )
            })}
        </>
      </TagContent>
      <TagContent title={t("header-information")}>
        <>
          {staticLinks.map((e, i) => {
            const url = e.url || "#"
            const frurl = e.frurl || e.url || ""
            const localizedUrl = language === "en" ? url : frurl
            return (
              <TagLink
                text={e.text}
                url={localizedUrl || "#"}
                key={i}
                icon={e.icon}
              />
            )
          })}
        </>
      </TagContent>
      {data?.caseCompGroup && Date.now() >= 1672786800 * 1000 && (
        <TagContent title={t("header-case-comp")}>
          <>
            <p>
              {t("text-group")}: {data?.caseCompGroup}
            </p>
            <TagLink
              text={t("link-case-comp-resources")}
              url={"https://celc.cfes.ca/casecomp"}
            />
          </>
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
