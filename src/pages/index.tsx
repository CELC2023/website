import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>Welcome to the Starter Conference Site</h1>
    <p>
      This website will be the public facing side of our tech stack.
    </p>
    <p>
      The site is built on the Gatsby framework using TypeScript.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage
