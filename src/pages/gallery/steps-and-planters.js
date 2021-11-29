import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function StepsAndPlanters() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="outdoor steps and planters"
            type="Exterior renovations"
            location="Ottawa, ON"
            description="using our carpentry skills to build steps and planters"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-1.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-2.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-3.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-4.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-5.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-6.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/steps-and-planters/steps-and-planters-7.jpg"
              }
              alt="outdoor renovations ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
