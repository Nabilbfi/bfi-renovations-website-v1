import React from "react"
import styled from "styled-components"

import Mastercard from "../images/payment/mastercard.svg"
import Visa from "../images/payment/visa.svg"
import Amex from "../images/payment/amex.svg"
import Interac from "../images/payment/interac.svg"
import Cash from "../images/payment/cash.svg"
import Check from "../images/payment/check.svg"

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * + * {
    margin-left: 5px;
  }

  img {
    width: 40px;
    height: 100%;
  }
`

export default function PaymentMethods() {
  return (
    <div>
      <p className="body--small">We accept:</p>
      <Flex>
        <img src={Mastercard} alt="" />
        <img src={Visa} alt="" />
        <img src={Amex} alt="" />
        <img src={Interac} alt="" />
        <img src={Cash} alt="" />
        <img src={Check} alt="" />
      </Flex>
    </div>
  )
}
