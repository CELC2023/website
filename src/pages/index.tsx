import { graphql } from "gatsby"
import * as React from "react"
import About from "../components/About"
import Bands from "../components/Bands"
import BandsCombined from "../components/BandsCombined"
import CommitteeListing from "../components/CommitteeListing"
import FAQ from "../components/Faq"
import History from "../components/History"

import Layout from "../components/layout"
import PastSponsor from "../components/PastSponsor"
import Seo from "../components/seo"
import Sponsor from "../components/Sponsor"
import TopArea from "../components/TopArea"

import "../styles/common.scss"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Homepage" />
    <TopArea />
    <BandsCombined />
    <History />
    <Sponsor />
    <PastSponsor />
    <FAQ />
    <CommitteeListing />
  </Layout>
)

export default IndexPage
export const query = graphql`
query($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
}
`;