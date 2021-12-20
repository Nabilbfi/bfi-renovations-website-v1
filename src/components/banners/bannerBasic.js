import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import { BannerWrapper, BannerText } from "./bannerItems"

export default function Banner(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container>
        <BannerText className="spacing">
          <p className="title bold">{props.title}</p>
          <p>
            Beautiful work and exceptional customer service is our top priority.
            We guarantee your satisfaction!
          </p>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
