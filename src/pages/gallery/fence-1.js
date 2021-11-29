import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Fence1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="fence installation"
            type="exterior renovations"
            location="Ottawa, ON"
            description="fence rebuild and refresh"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/fence-1/fence-1.jpg"}
              alt="fence builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/fence-1/fence-2.jpg"}
              alt="fence builder in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/fence-1/fence-3.jpg"}
              alt="fence builder in ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
