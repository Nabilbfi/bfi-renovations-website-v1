import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Interior() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div className="sb-p-clr-blck-cls">
          {/* <p>prioritizing your safety in ottawa</p> */}
          <h1>
            Interior Renovation <br /> Services Ottawa
          </h1>
          <ul>
            <li>
              Paint
            </li>
            <li>
              Baseboard
            </li>
            <li>
              Hardwood
            </li>
            <li>
              Tiles
            </li>
            <li>
              Laminate
            </li>
          </ul>
          <p>
            Even the best homes in Ottawa need a refresh from time to time. And when that time comes, BFI Renovations is here to provide impressive interior renovations with a focus on quality and client satisfaction.
          </p>
          <p>
            With BFI Renovations, you get a team with experience across a wide range of home improvements. From impeccable drywall and painting services to trim work to hardwood, laminate, and tile flooring installations, we'll work with you to understand the exact Ottawa interior renovation you want and develop a detailed plan to ensure the final result exceeds your every expectation.
          </p>
          <p>
            At BFI Renovations, we understand that deciding on an interior renovation can be a major decision. For exactly that reason, we'll walk you through every option available, letting you know their advantages, disadvantages, and our professional opinion about the value they provide.
          </p>
          <p>
            Get a beautiful and functional interior renovation in Ottawa with the pros at BFI Renovations. Call us today at <a href="tel:613-620-4340"><strong>613-620-4340</strong></a>!
          </p>
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
