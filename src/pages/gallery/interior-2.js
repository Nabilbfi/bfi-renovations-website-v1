import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Interior2() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="interior renovation"
            type="Interior"
            location="Ottawa, ON"
            description="insulation, drywall"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/interior-2/interior-1.jpg"}
              alt="interior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/interior-2/interior-2.jpg"}
              alt="interior renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/interior-2/interior-3.jpg"}
              alt="interior renovations ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
