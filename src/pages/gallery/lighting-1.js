import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Lighting1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="lighting installation"
            type="Electrical"
            location="Riverside South, ON"
            description="indoor electrical work"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-1.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-2.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-3.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-4.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-5.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/lighting-1/lighting-6.jpg"}
              alt="lighting installation ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
