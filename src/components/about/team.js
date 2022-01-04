import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex } from "../layoutComponents"

export default function Team() {
  return (
    <Section>
      <Container className="spacing-lg">
        <p className="title">meet the BFI renovations owner</p>
        <div className="spacing">
          <div className="spacing">
            <Flex>
              <StaticImage
                src={"../../images/company/nabil-khatib.png"}
                alt="bfi renovations team member"
                placeholder="blurred"
              />
              <div className="spacing">
                <p>
                  {" "}
                  With a diverse set of skills including acting and cooking,
                  Nabil Khatib learned from the best from growing up in a family
                  that was full of skilled contractors and tradesmen. Nabil's
                  family has owned restaurants and rental units for most of his
                  life in which he was in charge of all the renovations that
                  took place throughout the many years of family ownership.
                  Nabil himself has run many of his own businesses including MMA
                  studios, restaurants, and corner stores in which he also took
                  care of all the renovations. Alongside owning BFI Renovations,
                  Nabil is also in the real estate business. With that being
                  said, if you choose to hire Nabil as your General Contractor,
                  you're going to get it all! Nabil knows what you need to
                  renovate your home, or to put your home on the market!
                </p>
                <p className="caps bold">Nabil Khatib, Owner</p>
              </div>
            </Flex>
            <hr />
          </div>
        </div>
      </Container>
    </Section>
  )
}
