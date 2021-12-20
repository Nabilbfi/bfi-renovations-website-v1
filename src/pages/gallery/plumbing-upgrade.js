import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function PlumbingUpgrade() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="Plumbing Upgrade"
            type="plumbing"
            location="Goulburn, ON"
            description=""
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_1.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
           <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_2.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_3.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_4.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_5.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_6.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_7.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
             <StaticImage
              src={"../../images/projects/plumbing-upgrade/img_pu_02_11_2021_8.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
