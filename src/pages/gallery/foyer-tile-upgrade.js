import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function FoyerTileUpgrade() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="Foyer Tile Upgrade"
            type="renovations"
            location="Gloucester, ON"
            description=""
          />
          <GridTwo>
          <StaticImage
              src={"../../images/projects/foyer-tile-upgrade/img_ftu_02_11_2021_3.jpg"}
              alt="foyer tile upgrade gloucester"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/foyer-tile-upgrade/img_ftu_02_11_2021_4.jpg"}
              alt="foyer tile upgrade gloucester"
              placeholder="blurred"
            />
             <StaticImage
              src={"../../images/projects/foyer-tile-upgrade/img_ftu_02_11_2021_2.jpg"}
              alt="foyer tile upgrade gloucester"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/foyer-tile-upgrade/img_ftu_02_11_2021_1.jpg"}
              alt="foyer tile upgrade gloucester"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
