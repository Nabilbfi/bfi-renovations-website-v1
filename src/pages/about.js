import React from "react"
import Layout from "../components/layout"
import Benefits from "../components/about/benefits"
import Team from "../components/about/team"
import Banner from "../components/banners/bannerBasic"

import BannerImg from "../images/banner.png"

export default function About() {
  return (
    <Layout>
      <Banner img={BannerImg} title="About Us" />
      <Benefits />
      <Team />
    </Layout>
  )
}
