import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Drywall1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="exterior renovations"
            type="Exterior renovations"
            location="Orleans, ON"
            description="outdoor renovations and caulking on windows and frames"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/exterior-1/exterior-1.jpg"}
              alt="exterior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/exterior-1/exterior-2.jpg"}
              alt="exterior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/exterior-1/exterior-3.jpg"}
              alt="exterior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/exterior-1/exterior-4.jpg"}
              alt="exterior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/exterior-1/exterior-5.jpg"}
              alt="exterior renovations ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
