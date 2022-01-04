import React from "react"
import styled from "styled-components"
import Stars from "./stars"
import Avatar from "./avatar"
import { AiOutlineCheckCircle } from "react-icons/ai"

const Wrapper = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  color: var(--txt-dark-secondary);
  & > * + * {
    margin-left: 5px;
  }
`

export default function SingleTestimonial(props) {
  return (
    <Wrapper className="spacing">
      <div className="spacing-sm">
        <p className="upper">{props.location}</p>
        <p className="heading bold caps">{props.service}</p>
      </div>
      <div>
        <Stars />
        <p className="italics">"{props.testimonial}"</p>
      </div>
      <div>
        <Flex>
          <AiOutlineCheckCircle size={20} />
          <p>Verified review</p>
        </Flex>
      </div>
    </Wrapper>
  )
}
