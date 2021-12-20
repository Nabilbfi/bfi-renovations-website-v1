import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function HoodFanReplacement1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="hood fan replacement"
            type="kitchen renovations"
            location="Ottawa, ON"
            description="hood fan replacement for kitchen"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-1.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-2.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-3.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-4.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-5.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-6.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-7.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-8.jpg"
              }
              alt="hood fan replacement ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
