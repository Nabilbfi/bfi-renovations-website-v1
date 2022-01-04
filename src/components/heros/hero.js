import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

import HeroImg from "../../images/ph.png"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 90vh;
  height: 100%;
  background: ${props => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.div`
  padding: 4em 2em;
  background: var(--clr-overlay-light);
  max-width: 70ch;
  width: 100%;
`

export default function Hero(props) {
  return (
    <HeroWrapper img={props.img}>
      <Container>
        <Text className="spacing">
          <div>
            <p className="upper bold">plumbing · Electrical · kitchen & bath</p>
            <h1 className="title bold">
              home renovations in ottawa & surrounding areas
            </h1>
          </div>
          <p>
            Fully trained & licensed home service professionals that deliver
            results you can count on!
          </p>
          <ButtonPrimary to="/contact">
            request a quote now &#8594;
          </ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
  )
}
