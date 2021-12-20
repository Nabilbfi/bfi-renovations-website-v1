import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Carpentry() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div>
          <p>prioritizing your safety in ottawa</p>
          <h1>
            ottawa carpentry <br /> services
          </h1>
          <ul>
            <li>cabinets</li>
            <li>decks</li>
            <li>custom shelving</li>
          </ul>
        </div>
        <div className="service-img-wrapper">
          <StaticImage
            className=".service-img"
            src={"../../images/services/carpentry.jpg"}
            alt=""
            placeholder="blurred"
          />
        </div>
      </ServiceSingle>
    </Layout>
  )
}
