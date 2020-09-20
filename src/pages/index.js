import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Dolls</h1>
    {props.data.allContentfulDoll.nodes.map((el, idx) => {
      const { name, childContentfulDollDescriptionRichTextNode, pictures, size, price } = el;
      if (name && pictures) {
        return <div className="card am-doll" key={idx}>
          <h2><Link to={name}>{name}</Link><span className="small"> - Size: {size}</span></h2>
          <div className="flex">
            <div className="description">{childContentfulDollDescriptionRichTextNode.content[0].content[0].value}</div>
            <img className="picture" src={pictures[0].fluid.srcWebp} />
          </div>
          <p>Price: {price}</p>
        </div>
      } else {
        return
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
      price
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