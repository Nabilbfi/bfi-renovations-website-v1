import React from "react"
import { TextWrapper, ServiceCard, Click } from "./serviceItems"
import { StaticImage } from "gatsby-plugin-image"
import { GridTwo, Section, Container } from "../layoutComponents"

export default function ServicesFull() {
  return (
    <Section>
      <Container className="spacing-lg">
        <TextWrapper className="spacing">
          <h2 className="title">
            If you need home renovation services in Ottawa, we can help!
          </h2>
          <p>
            We specialize in plumbing, electrical work, carpentry, and interior
            & exterior home renovations. We are trained to handle any home
            renovation project, big or small, with the utmost professionalism
            and care.
          </p>
        </TextWrapper>
        <center>
          <GridTwo>
            <ServiceCard to="/services/plumbing" className="spacing">
              <StaticImage
                className="img"
                src="../../images/services/plumbing.jpg"
                alt="ottawa plumbing"
                placeholder="blurred"
              />
              <h2>plumbing</h2>
              <p>
                We offer the fastest response and most reliable service for your
                emergency plumbing needs.
              </p>
              <Click>view services &#x2192;</Click>
            </ServiceCard>
            <ServiceCard to="/services/electrical" className="spacing">
              <StaticImage
                className="img"
                src="../../images/services/electrical.jpg"
                alt="ottawa electrician"
                placeholder="blurred"
              />
              <h2>electrical</h2>
              <p>
                It's time to let a professional handle your electrical work. We
                can do it for you in no time, and with little disruption of your
                everyday routine!
              </p>
              <Click>view services &#x2192;</Click>
            </ServiceCard>
            <ServiceCard to="/services/carpentry" className="spacing">
              <StaticImage
                className="img"
                src="../../images/services/carpentry.jpg"
                alt="ottawa carpentry"
                placeholder="blurred"
              />
              <h2>carpentry</h2>
              <p>
                We are dedicated to using the best quality wood products so you
                can enjoy the look and feel of your custom made deck, cabinet,
                or shelving unit.
              </p>
              <Click>view services &#x2192;</Click>
            </ServiceCard>
            <ServiceCard to="/services/interior" className="spacing">
              <StaticImage
                className="img"
                src="../../images/services/interior.jpg"
                alt="interior renovations in ottawa"
                placeholder="blurred"
              />
              <h2>interior renovations</h2>
              <p>
                Our team has a proven track record when it comes to renovating
                any kind of interior space.
              </p>
              <Click>view services &#x2192;</Click>
            </ServiceCard>
            <ServiceCard to="/services/exterior" className="spacing">
              <StaticImage
                className="img"
                src="../../images/services/exterior.jpg"
                alt="exterior renovations in ottawa"
                placeholder="blurred"
              />
              <h2>exterior renovations</h2>
              <p>
                Whether you're looking for a new deck, siding, or even doors,
                our professionals will ensure you're happy with your new
                exterior home upgrade or repair.
              </p>
              <Click>view services &#x2192;</Click>
            </ServiceCard>
          </GridTwo>
        </center>
      </Container>
    </Section>
  )
}
