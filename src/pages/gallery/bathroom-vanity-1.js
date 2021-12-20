import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function BathroomVanity1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="bathroom vanity removal & installation"
            type="Plumbing"
            location="Kanata, ON"
            description="removing an old bathroom vanity and installing a new one"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/bathroom-vanity-1/bathroom-vanity-1.jpg"
              }
              alt="bathroom vanity installation kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-vanity-1/bathroom-vanity-2.jpg"
              }
              alt="bathroom vanity installation kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-vanity-1/bathroom-vanity-3.jpg"
              }
              alt="bathroom vanity installation kanata"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
