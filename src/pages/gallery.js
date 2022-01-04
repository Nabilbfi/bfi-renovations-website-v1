import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { GridTwo, Section, Container } from "../components/layoutComponents"
import Banner from "../components/banners/bannerBasic"
import AllGallery from "../components/gallery/allGallery"

import BannerImg from "../images/banner.png"

const Text = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export default function Gallery() {
  return (
    <Layout>
      <Banner img={BannerImg} title="Project Gallery" />
      <Section>
        <Container className="spacing-lg">
          <Text className="spacing">
            <h1 className="title">our ottawa home renovations gallery</h1>
            {/* <p>
              Our Ottawa home renovation services include plumbing and
              electrical work, custom carpentry, and interior and exterior
              renovations. 
            </p> */}
          </Text>
          <AllGallery />
        </Container>
      </Section>
    </Layout>
  )
}
