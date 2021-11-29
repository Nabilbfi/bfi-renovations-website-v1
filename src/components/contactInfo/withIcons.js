import React from "react"
import styled from "styled-components"

import { Info } from "../info"
import PaymentMethods from "../paymentMethods"

import { FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"

const device = {
  md: "48em",
}

const ContactInfoWrapper = styled.div`
  @media screen and (max-width: ${device.md}) {
    margin-top: var(--spacer-lg);
  }
`

const List = styled.ul`
  padding: 0;
  margin: var(--spacer) 0 0 0;
  list-style-type: none;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }
`

export default function WithIcons() {
  return (
    <div className="spacing-lg">
      <ContactInfoWrapper>
        <p className="body--large">{Info.name}</p>
        <List className="spacing">
          <li>
            <Flex>
              <IoLocationSharp className="accent" />
              <p>{Info.city1} & Surrounding areas</p>
            </Flex>
          </li>
          <li>
            <Flex>
              <FaPhoneAlt className="accent" />
              <a className=" italics" href="tel: 613-620-4340">
                {Info.tel1}
              </a>
            </Flex>
          </li>
          <li>
            <Flex>
              <SiMailDotRu className="accent" />
              <a className=" italics" href="mailto: bfirenovations.ca">
                {Info.mail1}
              </a>
            </Flex>
          </li>
          <li>
            <Flex>
              <FaRegClock className="accent" />
              <p>{Info.hours}</p>
            </Flex>
          </li>
        </List>
      </ContactInfoWrapper>
      <PaymentMethods />
    </div>
  )
}
