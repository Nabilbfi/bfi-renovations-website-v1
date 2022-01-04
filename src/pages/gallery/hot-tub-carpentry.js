import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function HotTubCarpentry() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="Hot Tub Carpentry"
            type="carpentry"
            location="Kanata, ON"
            description=""
          />
          
          <GridTwo>
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_1.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
           <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_2.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_3.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_4.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_5.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_6.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_7.jpg"}
              alt="hot tub carpentry kanata"
              placeholder="blurred"
            />
            

          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
