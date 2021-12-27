import { graphql } from "gatsby"
import * as React from "react"
import About from "../components/About"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopArea from "../components/TopArea"

import "../styles/common.scss"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <TopArea />
    <About />
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