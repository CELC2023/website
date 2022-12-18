import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"

import type { PageProps } from "gatsby"
import "../styles/common.scss"
import "../styles/livecelc.scss"
import TagContent from "../components/TagContent"
import TagLink from "../components/TagLink"
import TagHeader from "../components/TagHeader"

const TagsPage: React.FC<PageProps> = (props: PageProps) => {
  const [user, setUser] = useState<string>("")
  useEffect(() => {
    if (typeof window !== undefined) {
      const item = localStorage.getItem("user")
      if (item !== null) {
        setUser(item)
      }
    }
  }, [])

  return (
    <div className="tag-container">
      <TagHeader name={user} />
      <TagContent title="Dynamic Links">
        <TagLink text="Hello World" />
      </TagContent>
      <TagContent title="Dynamic Links">
        <>
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
          <TagLink text="Hello World" />
        </>
      </TagContent>
      <TagContent title="Information">
        <>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
        </>
      </TagContent>
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
