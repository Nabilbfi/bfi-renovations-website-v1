import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Plumbing() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}

        <div className="sb-p-clr-blck-cls">
          {/* <p>prioritizing your safety in ottawa</p> */}
          <h1>
            Ottawa Plumbing <br /> Services
          </h1>
          <ul>
            <li>
              Full-Service Bathroom And Kitchen Plumbing
            </li>
            <li>
              Vanity Install
            </li>
            <li>
              Sink And Tape Replacement
            </li>
            <li>
              Shower And Tub Install
            </li>
            <li>
              Tiling, Grout
            </li>
            <li>
              Toilet, Bidet
            </li>
            <li>
              Kitchen Sinks, Appliances
            </li>
          </ul>
          <p>
            When it's working right, your home's plumbing in Ottawa might never be noticed, but at the first sign of trouble, you can bet that plumbing will have your attention!
          </p>
          <p>
            At BFI Renovations, we are experienced plumbers and capable of everything from emergency Ottawa plumbing repairs to full bathroom and kitchen renovations that include vanity, sink, shower, and counter installations as well as setting up new appliances and testing to make sure everything is functioning properly.
          </p>
          <p>
            What we want is not only for your Ottawa plumbing to be working right, but for your entire plumbing system to improve your day-to-day life. Our bathroom and kitchen renovations are designed for maximum function and to help you start truly realizing your space's potential. Trust BFI Renovations for plumbing work of the highest quality at a price that fits your budget.
          </p>
          <p>
            Call BFI Renovations at <a href="tel:613-620-4340"><strong>613-620-4340</strong></a> for flawless plumbing in Ottawa!
          </p>
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
