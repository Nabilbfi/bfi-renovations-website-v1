import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBasic from "../components/headers/headerBasic"
import CallToAction from "../components/callToActions/callToAction"
import FooterBasic from "../components/footers/footerBasic"
import Banner from "../components/banners/bannerBasic"
import SingleTestimonial from "../components/testimonials/singleTestimonial"

import BannerImg from "../images/banner.png"
import ActionImg from "../images/ph.png"
import { GridTwo, Section, Container } from "../components/layoutComponents"

export default function Reviews() {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <Banner img={BannerImg} title="Our Happy Customers" />
      <Section>
        <Container>
          <GridTwo>
            <SingleTestimonial
              location="Kanata, ON"
              service="handyman services"
              testimonial="Nabil is very professional and friendly.  He arrived on time and the work was done to our standards and specifications of what we wanted done. He replaced our front entrance floor with tile, put down baseboards and quarter round and replaced several screens in the windows and a door in the home. He is multifaceted and his expertise shows in his work. We would recommend him for anything you would need done in your home."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Omar is a very nice young man and was very friendly and helpful."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Loved Nabil. Great guy. Explained everything he did before starting. Quick to call and easy to reach. Highly recommend."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Communicated well and did a great job fixing the issue. Very pleased."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Efficient, very knowledgeable, even suggested that a new ramp was not required and a simple adjustment to my old ramp to level it off thus saving me money on material.  Totally happy with his work and would not hesitate in recommending him."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Knowledgeable and fair pricing. Good pro."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="Flooring & Tiling"
              testimonial="Additional tiles were replaced at no additional cost from original estimate!"
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Just did a fine job with enthusiasm. Thanks."
            />
            <SingleTestimonial
              location="Kanata, ON"
              service="handyman services"
              testimonial="Great service. Great advice."
            />
            <SingleTestimonial
              location="Kanata, ON"
              service="drywall repair"
              testimonial="Another great guy and a strong focus on quality workmanship."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Great job!"
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Nabil is so professional and his work is 100% and he doesn't waste any time which I totally appreciate."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Nabil was polite friendly and efficient. My husband and I highly recommend him and will definitely have him back to do more jobs."
            />
            <SingleTestimonial
              location="Carleton Place, ON"
              service="handyman services"
              testimonial="Nabil was very professional and flexible to accommodate my changing schedule. The quality of work he did was great! I will definitely recommend him and also hire him for future work."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Was friendly, quick communicator, knowledgeable, honest and forthcoming regarding how to fix my problem. Highly recommend. Thanks, Nabil."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="He did a great job. He explained what was going on and kept up to date with what he had to do. I am very pleased with the job he did."
            />
            <SingleTestimonial
              location="Arnprior, ON"
              service="appliance install"
              testimonial="Would recommend and give reference."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Great job. Nabil explained everything and let me know what was going on at all times."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Great guy. Very detail oriented. Went out of his way to do it right."
            />
            <SingleTestimonial
              location="Ottawa, ON"
              service="handyman services"
              testimonial="Nabil was very professional and followed the Covid protocall and I will get him to do more work in the future. Highly recommend."
            />
          </GridTwo>
        </Container>
      </Section>
      <CallToAction
        img={ActionImg}
        textPrimary="Call BFI Renovations Today!"
        textSecondary="Call or text the number below to get a free, no-obligation estimate from a professional on your next home renovation project."
      />
      <FooterBasic />
    </>
  )
}
