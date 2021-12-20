import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banners/bannerBasic"

import BannerImg from "../images/banner.png"
import FormContact from "../components/forms/formContact"
import Benefits from "../components/about/benefits"
import Team from "../components/about/team"

export default function Contact() {
  return (
    <Layout>
      <Banner img={BannerImg} title="Contact Us" />
      <FormContact />
      <Benefits />
      <Team />
    </Layout>
  )
}
