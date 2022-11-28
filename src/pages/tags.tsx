import { graphql } from "gatsby";
import React from "react";

import type { PageProps } from "gatsby";


const TagsPage: React.FC<PageProps> = (props: PageProps) => {
    const location = typeof window !== undefined ? localStorage.getItem("user") : "";
    return (
        <div>
            <p>{location}</p>
            <a onClick={()=> {
              if(typeof window !== undefined) {
                localStorage.removeItem("user")
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
