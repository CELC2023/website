import * as React from "react"
import About from "../components/About"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopArea from "../components/TopArea"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <TopArea />
    <About />
  </Layout>
)

export default IndexPage
