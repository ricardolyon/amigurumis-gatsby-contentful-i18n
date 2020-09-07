import React from "react"
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from 'gatsby-source-contentful/rich-text'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <pre>{JSON.stringify(props.data.allContentfulDoll)}</pre>
    <SEO title="Home" />
    <h1>Dolls</h1>
    {props.data.allContentfulDoll.nodes.map(el => {
      const { name, childContentfulDollDescriptionRichTextNode } = el;
      if (name) {
        return <div className="card">
          <Link to={name}> {name}</Link>
          <div>{childContentfulDollDescriptionRichTextNode.content[0].content[0].value}</div>
        </div>
      }
    })}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulDoll {
      nodes {
        id
        name
        childContentfulDollDescriptionRichTextNode {
          content {
            content {
              value
            }
          }
        }
      }
    }
  }
`