import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Wrapper = styled.div`
  margin-bottom: 2em;
`

export default function Title(props) {
  return (
    <Wrapper>
      <h2 className="title">{props.title}</h2>
      <hr className="accent" />
    </Wrapper>
  )
}
