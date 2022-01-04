import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Cabinets1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="cabinets installation"
            type="carpentry & interior renovations"
            location="Ottawa, ON"
            description="removing an old shower door and installing a new double door"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-1.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-2.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-3.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-4.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-5.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/cabinets-1/cabinets-6.jpg"}
              alt="cabinet installation ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
