import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Deck2() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="deck rebuild and refresh"
            type="exterior renovations"
            location="Ottawa, ON"
            description="deck rebuild and refresh"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/deck-2/deck-1.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-2.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-3.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-4.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-5.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-6.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-7.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-8.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-9.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-10.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-11.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-12.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-13.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-2/deck-14.jpg"}
              alt="deck builder in ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
