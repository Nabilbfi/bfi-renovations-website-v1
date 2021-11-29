import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Plumbing() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div>
          <p>prioritizing your safety in ottawa</p>
          <h1>
            ottawa plumbing <br /> services
          </h1>
          <ul>
            <li>full-service bathroom and kitchen plumbing</li>
            <li>vanity install</li>
            <li>Sink and tape replacement</li>
            <li>Shower and tub install</li>
            <li>tiling, grout </li>
            <li>toilet, bidet</li>
            <li>Kitchen sinks, appliances</li>
          </ul>
        </div>
        <div className="service-img-wrapper">
          <StaticImage
            className=".service-img"
            src={"../../images/services/plumbing.jpg"}
            alt=""
            placeholder="blurred"
          />
        </div>
      </ServiceSingle>
    </Layout>
  )
}
