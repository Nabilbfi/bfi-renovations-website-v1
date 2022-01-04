import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Section, Container } from "../layoutComponents"

const Wrapper = styled.div`
  margin-bottom: var(--spacer);
  h1 {
    font-weight: var(--fw-700);
  }
`

const Description = styled.p``

export default function SpecificGallery(props) {
  return (
    <Wrapper className="spacing">
      <Link to="/gallery">&#x2190; Go back</Link>
      <h1 className="title accent">{props.title}</h1>
      <div>
        <p className="caps">
          {" "}
          <span className="bold"> project type:</span> {props.type}
        </p>
        <p className="caps">
          {" "}
          <span className="bold"> location:</span> {props.location}
        </p>
        {/* <Description>{props.description}</Description> */}
      </div>
    </Wrapper>
  )
}
