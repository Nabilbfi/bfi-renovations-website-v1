import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { TextWrapper, List } from "./serviceItems"
import Benefits from "../about/benefits"

const device = {
  md: "48em",
}
const Wrapper = styled.div`
  h1 {
    font-size: var(--fs-1);
    font-weight: var(--fw-700);
    text-transform: capitalize;
    line-height: 1.1;
  }
  p {
    color: var(--clr-accent);
    text-transform: uppercase;
  }
  ul {
    margin: var(--spacer) 0;
    padding: 0;
    list-style-position: inside;
    li {
      text-transform: capitalize;
    }
  }
  .service-img-wrapper {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    img {
    }
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

export default function ServiceSingle({ children }) {
  return (
    <>
      <Wrapper>
        <Section>
          <Container>
            <Flex>{children}</Flex>
          </Container>
        </Section>
      </Wrapper>
      <Benefits />
    </>
  )
}
