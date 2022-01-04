import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import Benefits from "../components/about/benefits"
import Owner from "../components/about/owner"
import ServicesFull from "../components/services/servicesFull"
import FeaturedGallery from "../components/gallery/featuredGallery"

import HeroImg from "../images/hero.png"

export default function Index() {
  return (
    <Layout>
      <Hero img={HeroImg} />
      <Benefits />
      <Owner />
      <ServicesFull />
      <FeaturedGallery />
    </Layout>
  )
}
