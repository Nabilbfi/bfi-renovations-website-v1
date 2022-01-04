import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, GridTwo } from "../../components/layoutComponents"
import SpecificGallery from "../../components/gallery/specificGallery"
import Layout from "../../components/layout"

export default function Gazebo1() {
  return (
    <Layout>
      <Section>
        <Container>
          <SpecificGallery
            title="gazebo rebuild"
            type="carpentry"
            location="Kanata, ON"
            description="gazebo rebuild and refresh"
          />
          <GridTwo>
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-1.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-2.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-3.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-4.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-5.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-6.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-7.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
            <StaticImage
              src={"../../images/projects/gazebo-1/gazebo-8.jpg"}
              alt="gazebo rebuild in ottawa"
              placeholder="blurred"
            />
          </GridTwo>
        </Container>
      </Section>
    </Layout>
  )
}
