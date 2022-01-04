import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Deck1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="deck rebuild"
            type="exterior renovations"
            location="Rockland, ON"
            description="deck rebuild and refresh"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/deck-1/deck-1.jpg"}
              alt="deck builder in rockland"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-1/deck-2.jpg"}
              alt="deck builder in rockland"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-1/deck-3.jpg"}
              alt="deck builder in rockland"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/deck-1/deck-4.jpg"}
              alt="deck builder in rockland"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
