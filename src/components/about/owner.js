import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, FlexMobileOpp } from "../layoutComponents"

const Text = styled.div`
  align-self: center;
  @media screen and (max-width: 48em) {
    margin-bottom: var(--spacer-lg);
  }
`

export default function Owner() {
  return (
    <Section>
      <Container>
        <FlexMobileOpp className="">
          <StaticImage
            src={"../../images/company/nabil-khatib.png"}
            placeholder="blurred"
            alt="nabil khatib - bfi renovations owner"
          />
          <Text>
            <div className="spacing">
              <div>
                <p className="title--top">meet our owner</p>
                <p className="title">nabil khatib</p>
              </div>
              <p>
                With a diverse set of skills including acting and cooking, Nabil
                Khatib learned from the best from growing up in a family that
                was full of skilled contractors and tradesmen. Nabil's family
                has owned restaurants and rental units for most of his life in
                which he was in charge of all the renovations that took place
                throughout the many years of family ownership. Nabil himself has
                run many of his own businesses including MMA studios,
                restaurants, and corner stores in which he also took care of all
                the renovations. Alongside owning BFI Renovations, Nabil is also
                in the real estate business. With that being said, if you choose
                to hire Nabil as your General Contractor, you're going to get it
                all! Nabil knows what you need to renovate your home, or to put
                your home on the market!
              </p>
            </div>
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
