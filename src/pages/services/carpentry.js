import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Carpentry() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div className="sb-p-clr-blck-cls">
          <p>prioritizing your safety in ottawa</p>
          <h1>
          Ottawa Carpentry <br /> Services
          </h1>
          <ul>
            <li>Cabinets</li>
            <li>Decks</li>
            <li>Custom Shelving</li>
          </ul>
          <p>
            Adding custom carpentry in Ottawa doesn't have to cost a fortune - BFI Renovations is a talented, affordable carpenter ready to give a unique touch to your home!
          </p>
          <p>
            Ottawa carpentry by BFI Renovations comes in all shapes and sizes, from custom-built cabinets that perfectly fit your kitchen to decks and sheds constructed from scratch to meet your exact needs. Whatever carpentry work you need, you can rest assured that we have the ability and experience to give you outstanding results that look great and function flawlessly.
          </p>
          <p>
            For any of our custom carpentry jobs in Ottawa, we'll start with a visit to discuss what you want and offer our professional opinion. From there, we'll craft detailed plans and source all the materials from our providers to ensure the best possible price. BFI Renovations uses high quality wood on all our carpentry creations and stand behind all the work we do.
          </p>
          <p>
            Let's get your Ottawa carpentry job started today! Call BFI Renovations at <a href="tel:613-620-4340"><strong>613-620-4340</strong></a> to schedule your visit.
          </p>
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
