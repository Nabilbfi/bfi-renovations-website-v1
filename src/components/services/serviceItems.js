import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const TextWrapper = styled.div`
  max-width: 70ch;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export const ServiceCard = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--txt-dark);
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 1em;

  h2 {
    text-transform: capitalize;
    text-decoration: underline;
  }

  .img {
    border-radius: var(--br);
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export const List = styled.ul`
  margin: var(--spacer) 0;
  padding: 0;
`

export const Click = styled.p`
  font-weight: 500;
  text-transform: uppercase;
  color: var(--clr-accent);
`
