import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import ServiceSingle from "../../components/services/serviceSingle"

export default function Electrical() {
  return (
    <Layout>
      <ServiceSingle>
        {/* styled in /components/services/serviceSingle.js/ */}
        <div className="sb-p-clr-blck-cls">
          <p>prioritizing your safety in ottawa</p>
          <h1>
            Electrical Services <br /> Ottawa
            {/* ottawa electrical <br /> services */}
          </h1>
          <ul>
            <li>Lighting</li>
            <li>Electrical Plugs</li>
            <li>Rewiring</li>
            <li>Pot Lights</li>
          </ul>
          <p>
            From faulty plugs to flickering lights, a lot can go wrong with your home's electrical system. That's why it's always a good idea to call in the pros at BFI Renovations anytime you need Ottawa electrical work.
          </p>
          <p>
            As experienced local electricians in Ottawa, the team at BFI Renovations knows how to evaluate electrical issues to discover the root of the problem. Instead of just applying a quick fix that'll break again, we strive to fix it for good, giving you the peace of mind that comes with a perfectly functioning electrical system in your home.
          </p>
          <p>
            In addition to standard Ottawa electrical services like replacing plugs, rewiring, and voltage testing, BFI Renovations can do inspections, lighting work, new appliance installations, ceiling fan fixes, and much more. We're also available 24/7 to respond to electrical emergencies and resolve electrical situations that need immediate attention.
          </p>
          <p>
            For a talented Ottawa electrician at a budget-friendly price, call BFI Renovations at <a href="tel:613-620-4340"><strong>613-620-4340</strong></a> today!
          </p>
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
