import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function BathroomRenovations() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="bathroom renovations"
            type="renovations"
            location="Orleans, ON"
            description=""
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_1.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_6.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_7.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
           <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_2.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_3.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_4.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/bathroom-renovations/img_br_02_11_2021_5.jpg"}
              alt="bathroom renovations orleans"
              placeholder="blurred"
            />
            
            
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
