import React from "react"
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

const Flex = styled.div`
  display: flex;
  /* justify-content: center; */

  > * {
    color: var(--clr-accent);
    font-size: 22px;
  }
`

export default function Stars() {
  return (
    <div>
      <Flex>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </Flex>
    </div>
  )
}
