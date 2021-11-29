import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Electrical() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div>
          <p>prioritizing your safety in ottawa</p>
          <h1>
            ottawa electrical <br /> services
          </h1>
          <ul>
            <li>lighting</li>
            <li>electrical plugs</li>
            <li>rewiring</li>
            <li>pot lights</li>
          </ul>
        </div>
        <div className="service-img-wrapper">
          <StaticImage
            className=".service-img"
            src={"../../images/services/electrical.jpg"}
            alt=""
            placeholder="blurred"
          />
        </div>
      </ServiceSingle>
    </Layout>
  )
}
