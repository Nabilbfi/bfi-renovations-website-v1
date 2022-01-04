import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function BathroomShower1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="shower door installation"
            type="bathroom renovations"
            location="Manotick, ON"
            description="removing an old shower door and installing a new double door"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/bathroom-shower-1/bathroom-shower-1.jpg"
              }
              alt="bathroom renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-shower-1/bathroom-shower-2.jpg"
              }
              alt="bathroom renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-shower-1/bathroom-shower-3.jpg"
              }
              alt="bathroom renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-shower-1/bathroom-shower-4.jpg"
              }
              alt="bathroom renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/bathroom-shower-1/bathroom-shower-5.jpg"
              }
              alt="bathroom renovations ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
