import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function GasStoveInstall1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="gas stove installation"
            type="Kitchen Renovations"
            location="Ottawa, ON"
            description="removing an old kitchen stove and installing a new gas stove"
          />
          <GridTwo>
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-1.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-2.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-3.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-4.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-5.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-6.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={
                "../../images/projects/gas-stove-install-1/gas-stove-install-7.jpg"
              }
              alt="gas stove installation ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
