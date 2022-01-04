import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Carpentry1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="custom carpentry"
            type="carpentry"
            location="Ottawa, ON"
            description="deck rebuild and refresh"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/carpentry-1/carpentry-1.jpg"}
              alt="custom carpentry ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/carpentry-1/carpentry-2.jpg"}
              alt="custom carpentry ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/carpentry-1/carpentry-3.jpg"}
              alt="custom carpentry ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
