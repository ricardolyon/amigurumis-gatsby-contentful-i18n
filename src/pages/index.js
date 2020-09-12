import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import Img from 'gatsby-image'
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Dolls</h1>
    {props.data.allContentfulDoll.nodes.map((el, idx) => {
      const { name, childContentfulDollDescriptionRichTextNode, pictures } = el;
      if (name && pictures) {
        return <div className="card" key={idx}>
          <Link to={name}>{name}</Link>
          <div>{childContentfulDollDescriptionRichTextNode.content[0].content[0].value}</div>
          <img src={pictures[0].fluid.srcWebp} />
        </div>
      } else {
        return <div></div>
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
      color
      material
      size
      pictures {
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
  }
}

`