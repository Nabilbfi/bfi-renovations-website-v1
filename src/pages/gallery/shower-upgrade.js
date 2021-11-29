import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function ShowerUpgrade() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="Shower Upgrade"
            type="renovations"
            location="Orleans, ON"
            description=""
          />
          <GridTwo>
          <StaticImage
              src={"../../images/projects/shower-upgrade/img_su_02_11_2021_3.jpg"}
              alt="shower upgrade orleans"
              placeholder="blurred"
            />
          <StaticImage
              src={"../../images/projects/shower-upgrade/img_su_02_11_2021_2.jpg"}
              alt="shower upgrade orleans"
              placeholder="blurred"
            />
            
            <StaticImage
              src={"../../images/projects/shower-upgrade/img_su_02_11_2021_1.jpg"}
              alt="shower upgrade orleans"
              placeholder="blurred"
            />
           
            

          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
