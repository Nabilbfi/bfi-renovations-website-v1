import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Exterior() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div className="sb-p-clr-blck-cls">
          {/* <p>prioritizing your safety in ottawa</p> */}
          <h1>
            Exterior Renovation Services Ottawa
          </h1>
          <ul>
            <li>
              Decks
            </li>
            <li>
              Siding
            </li>
            <li>
              Doors
            </li>
            <li>
              Screen
            </li>
            <li>
              Storm Doors
            </li>
            <li>
              Paint
            </li>
          </ul>
          <p>
            Appearance. Security. Entertainment. Protection from the elements. There are a million reasons why you might be thinking about an exterior home renovation in Ottawa. Whatever the reason, BFI Renovations can make it happen.
          </p>
          <p>
            As one of the Ottawa area's most experienced home improvement specialists, we're proud to offer a wide range of exterior renovation services that are all delivered with impeccable quality. From installing a new door to repairing your deck to adding siding to protect your home, BFI Renovations will take the time to do it right and perform a flawless execution.
          </p>
          <p>
            If you're considering an exterior renovation in Ottawa, but don't know where to start, then contact us for a free, no obligation estimate. A member of the BFI Renovations team will visit your home to discuss your renovation budget and let you know where you can get the best bang for every dollar spent.
          </p>
          <p>
            BFI Renovations wants your Ottawa exterior renovation to be an amazing success. Call <a href="tel:613-620-4340"><strong>613-620-4340</strong></a> and let's talk about how we can help!
          </p>
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
