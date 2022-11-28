import { graphql, navigate, PageProps } from "gatsby"
import React, { useEffect } from "react"
import Attend from "../components/Attend"
import BandsCombined from "../components/BandsCombined"
import CommitteeListing from "../components/CommitteeListing"
import FAQ from "../components/Faq"
import History from "../components/History"
import HowToAttend from "../components/HowToAttend"

import Layout from "../components/layout"
import Sponsors from "../components/Sponsors"
import Seo from "../components/seo"
import TopArea from "../components/TopArea"

import "../styles/common.scss"

const IndexPage: React.FC<PageProps> = (props: PageProps) => {
  useEffect(() => {
    const location = props.location.href
    if(location != null) {
      const url: URL = new URL(location);
      const user = url.searchParams.get("user")
      if(user != null && typeof window !== undefined) {
        localStorage.setItem("user", user)
        navigate("/tags")
      }
      
    }
  }, [])
  
  return (
    <Layout>
      <Seo title="Diversity, Technology, and Sustainability" />
      <TopArea />
      <BandsCombined />
      <History />
      <HowToAttend />
      <Attend />
      <Sponsors />
      <FAQ />
      <CommitteeListing />
    </Layout>
  )
}

export default IndexPage
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
