import React, { useCallback, useEffect, useRef } from "react"
import { Trans, useTranslation } from "react-i18next"
import "./History.scss"
import HistoryCard from "./HistoryCard"
import Slider from "react-slick"
import Arrow, { ArrowDirections } from "./Arrow"
import Fade from "react-reveal/Fade"

const History: React.FC = () => {
  const { t } = useTranslation()

  const historyList = [
    {
      backgroundClass: "congress1975",
      title: t("history-congress"),
      year: 1975,
      content: t("history-75congress"),
    },
    {
      backgroundClass: "congress1994",
      title: t("history-congress"),
      year: 1994,
      content: t("history-94congress"),
    },
    {
      backgroundClass: "cec2005",
      title: t("history-cec"),
      year: 2005,
      content: t("history-05cec"),
    },
    {
      backgroundClass: "congress2016",
      title: t("history-congress"),
      year: 2016,
      content: t("history-16congress"),
    },
    {
      backgroundClass: "cec2017",
      title: t("history-cec"),
      year: 2017,
      content: t("history-17cec"),
    },
    {
      backgroundClass: "cde2020",
      title: t("history-cde"),
      year: 2020,
      content: t("history-20cde"),
    },
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }

  return (
    <section className="history" id="history">
      <Fade bottom>
        <div className="title padded-section">
          <h2 className="all-caps">
            <Trans i18nKey={"history-title"}></Trans>
          </h2>
        </div>

        <div className="content">
          <Slider {...settings}>
            {historyList.map(h => {
              return (
                <HistoryCard
                  backgroundClass={h.backgroundClass}
                  content={h.content}
                  key={h.title + h.year.toFixed(0)}
                  title={h.title}
                  year={h.year}
                />
              )
            })}
          </Slider>
        </div>
      </Fade>
    </section>
  )
}

export default History
