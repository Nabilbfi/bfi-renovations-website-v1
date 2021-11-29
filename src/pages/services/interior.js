import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Interior() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div>
          <p>prioritizing your safety in ottawa</p>
          <h1>
            interior renovation <br /> services ottawa
          </h1>
          <ul>
            <li>paint</li>
            <li>baseboard</li>
            <li>hardwood</li>
            <li>tiles</li>
            <li>laminate</li>
          </ul>
        </div>
        <div className="service-img-wrapper">
          <StaticImage
            className=".service-img"
            src={"../../images/services/interior.jpg"}
            alt=""
            placeholder="blurred"
          />
        </div>
      </ServiceSingle>
    </Layout>
  )
}
