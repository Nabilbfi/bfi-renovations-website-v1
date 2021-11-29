import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function MicrowaveHoodFanInstall1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="microwave hood fan installation"
            type="kitchen renovations"
            location="Ottawa, ON"
            description="removing an old bathroom vanity and installing a new one"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/microwave-hood-fan-install-1/microwave-hood-fan-install-1.jpg"
              }
              alt="microwave hood fan installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/microwave-hood-fan-install-1/microwave-hood-fan-install-2.jpg"
              }
              alt="microwave hood fan installation ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
