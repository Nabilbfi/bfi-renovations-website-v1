import React from "react"
import { Helmet } from "react-helmet"

import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import FormContact from "../components/forms/formContact"
import FooterBasic from "./footers/footerBasic"
import FeaturedTestimonial from "./testimonials/featuredTestimonial"
import CallToAction from "./callToActions/callToAction"
import FacebookFeed from "./facebookFeed"

import ActionImg from "../images/call-to-action.png"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <FeaturedTestimonial />
      <CallToAction
        img={ActionImg}
        textPrimary="Call BFI Renovations Today!"
        textSecondary="Call or text the number below to get a free, no-obligation estimate from a professional on your next home renovation project."
      />
      <FooterBasic />
    </>
  )
}
