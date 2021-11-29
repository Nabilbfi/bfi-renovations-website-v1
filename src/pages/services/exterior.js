import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Exterior() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div>
          <p>prioritizing your safety in ottawa</p>
          <h1>
            exterior renovation <br /> services ottawa
          </h1>
          <ul>
            <li>decks</li>
            <li>siding</li>
            <li>doors</li>
            <li>screen</li>
            <li>storm doors</li>
            <li>paint</li>
          </ul>
        </div>
        <div className="service-img-wrapper">
          <StaticImage
            className=".service-img"
            src={"../../images/services/exterior.jpg"}
            alt=""
            placeholder="blurred"
          />
        </div>
      </ServiceSingle>
    </Layout>
  )
}
