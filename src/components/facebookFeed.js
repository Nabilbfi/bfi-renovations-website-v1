import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FindUsFB from "../images/socials/find-us-on-facebook.svg"

const Frame = styled.iframe`
  @media screen and (max-width: 36em) {
    width: 250px;
  }
  @media screen and (max-width: 18em) {
    width: 180px;
  }
`

export default function FacebookFeed() {
  return (
    <div>
      <Frame
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBFIRenovations%2F&tabs&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width={500}
        height={130}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  )
}
