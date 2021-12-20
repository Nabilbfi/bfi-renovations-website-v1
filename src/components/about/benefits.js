import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import {
  AiOutlineCheckCircle,
  AiOutlineFieldTime,
  AiOutlineDollarCircle,
} from "react-icons/ai"
import { RiEmotionHappyLine } from "react-icons/ri"

const TextWrapper = styled.div`
  align-self: center;
`

const List = styled.ul`
  margin: var(--spacer-md) 0;
  padding: 0;
  list-style-type: none;
  list-style-position: inside;

  li {
    font-weight: var(--fw-500);
    text-transform: uppercase;
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 10px;
    }
  }
`

export default function Benefits() {
  return (
    <Section>
      <Container>
        <Flex className="spacing-lg">
          <TextWrapper className="spacing">
            <div>
              <p className="title--top">25+ Years Experience</p>
              <h2 className="title">Providing Home Renovation Services</h2>
            </div>
            <p>
              The BFI Renovations team is proud to provide home renovation
              services to Ottawa and surrounding areas. From electrical and
              plumbing work to custom carpentry, we have you covered. Have a
              kitchen or bathroom that needs to be renovated? Putting in new
              flooring? Need a new deck or fencing? Work with the best, and{" "}
              <a className="inline-link" href="tel: 613-620-4340">
                call us today!
              </a>{" "}
              At BFI Renovations, we're dedicated to ensuring you'll live more
              comfortably in your home. Once our Ottawa home renovation
              professionals have serviced you and your family, you'll understand
              the BFI Renovations difference - our customer service. Not only
              are we{" "}
              <Link className="inline-link" to="/reviews">
                highly-reviewed
              </Link>{" "}
              by our past customers, but we also offer{" "}
              <Link className="inline-link" to="/contact">
                free online quotes
              </Link>{" "}
              for your next home renovation.
            </p>
            <ButtonPrimary to="/contact">talk to an expert</ButtonPrimary>
            <List className="spacing">
              <li>
                <AiOutlineCheckCircle className="accent" size={20} />
                <span>certified professionals</span>
              </li>
              <li>
                <AiOutlineFieldTime className="accent" size={20} />
                <span>24/7 availability</span>
              </li>
              <li>
                <AiOutlineDollarCircle className="accent" size={20} />
                <span>competitive pricing</span>
              </li>
              <li>
                <RiEmotionHappyLine className="accent" size={20} />
                <span>results you can count on!</span>
              </li>
            </List>
          </TextWrapper>
          <StaticImage
            src={"../../images/company/benefits.png"}
            placeholder="blurred"
            alt="home renovations ottawa"
          />
        </Flex>
      </Container>
    </Section>
  )
}
