import React from "react"
import styled from "styled-components"

const Text = styled.div`
  color: var(--txt-dark-secondary);
  text-transform: capitalize;
`

const Name = styled.p`
  line-height: 1;
`

const Company = styled.p``

export default function Avatar(props) {
  return (
    <Text>
      <Company className="body body--small italics">{props.company}</Company>
    </Text>
  )
}
