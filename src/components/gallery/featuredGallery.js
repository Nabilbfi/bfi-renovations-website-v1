import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../layoutComponents"

const Text = styled.div`
  text-align: center;
`

export default function FeaturedGallery() {
  return (
    <Section>
      <Container className="spacing-lg">
        <Text>
          <h2 className="title--top">ottawa home renovations</h2>
          <p className="title">our featured gallery</p>
        </Text>
        <div className="spacing">
          <GridTwo>
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-1.jpg"}
              alt="ottawa home renovations"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-1/deck-1.jpg"}
              alt="ottawa home renovation"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-vanity-1/bathroom-vanity-1.jpg"
              }
              alt="ottawa home renovation"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-1.jpg"}
              alt="ottawa home renovation"
              placeholder="blurred"
            />
          </GridTwo>
          <Link className="inline-link" to="/gallery">
            View full gallery &#8594;
          </Link>
        </div>
      </Container>
    </Section>
  )
}
