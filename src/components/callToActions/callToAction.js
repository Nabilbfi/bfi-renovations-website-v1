import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { Info } from "../info"
import { AnchorPrimary } from "../buttons"
import { FaPhoneAlt } from "react-icons/fa"

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => `url(${props.img})`}, var(--clr-overlay-accent);
  background-blend-mode: overlay;
  background-position: center;
  background-attachment: fixed;
  background-size: contain;
  padding: 4em 0;
`

const ActionText = styled.div`
  padding: 1.5em 2em;
  background: var(--clr-light);
  color: var(--txt-dark);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 70ch;
  h1,
  h2,
  h3,
  h4,
  p {
    line-height: 1.1;
  }
`

export default function CallToAction(props) {
  return (
    <ActionWrapper img={props.img}>
      <Container className="spacing">
        <ActionText className="spacing">
          <p className="title bold italics">{props.textPrimary}</p>
          <p className=" bold">{props.textSecondary}</p>
          <Actions>
            <AnchorPrimary href="tel: 613-620-4340">
              <div>
                <FaPhoneAlt />
                <span>613-620-4340</span>
              </div>
            </AnchorPrimary>
          </Actions>
        </ActionText>
      </Container>
    </ActionWrapper>
  )
}
