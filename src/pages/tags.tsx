import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

import type { PageProps } from "gatsby";


const TagsPage: React.FC<PageProps> = (props: PageProps) => {
  const [user, setUser] = useState<string>("")
  useEffect(() => {
    if(typeof window !== undefined) {
      const item = localStorage.getItem("user");
      if(item !== null) {
        setUser(item)
      }
    }
  }, [])

    return (
        <div>
            <p>{user}</p>
            <a onClick={()=> {
              if(typeof window !== undefined) {
                localStorage.removeItem("user")
                setUser("")
              }
            }}>Clear</a>
        </div>
    )
}

export default TagsPage;

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
