import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container, Flex } from "../layoutComponents"
import PaymentMethods from "../paymentMethods"
import FacebookFeed from "../facebookFeed"

import { FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"

import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo.svg"

// social icons
import Logo from "../../images/logo.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"

const device = {
  sm: "38em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 7em 0 1em 0;
  background: var(--clr-light-secondary);
  color: var(--txt-dark);

  @media screen and (max-width: 450px) {
    padding: 4em 0;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px;
  }
  & > * + * {
    margin-left: 5px;
  }
`

const LicenceContainer = styled.div`
  img {
    width: 100%;
  }
`

const Socials = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  img {
    width: 40px;
  }
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.sm}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.sm}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-dark);
  font-weight: var(--fw-500);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-dark-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-dark-secondary);
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <center>
            <FacebookFeed />
          </center>
          <PaymentMethods />
          <Flex>
            <FlexItem>
              <p className="heading bold upper">contact us</p>
              <ul>
                <li>
                  <FlexContact>
                    <FaPhoneAlt className="accent" />
                    <a className=" italics" href="tel: 613-620-4340">
                      {Info.tel1}
                    </a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <SiMailDotRu className="accent" />
                    <a
                      className="italics"
                      href="mailto: bfirenovations@gmail.com"
                    >
                      {Info.mail1}
                    </a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <FaRegClock className="accent" />
                    <p>{Info.hours}</p>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>{Info.city1}</li>
                <li>Canada</li>
              </ul>
            </FlexItem>
            <FlexItem>
              <p className="heading bold upper">quick links</p>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/services">services</StyledLink>
                </li>
                <li>
                  <StyledLink to="/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/reviews">reviews</StyledLink>
                </li>
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading bold upper">service areas</p>
              <ul>
                <li>
                  We provide home renovation services in Ottawa, ON and
                  surrounding areas such as Kanata, Nepean, Carleton Place,
                  Arnprior, Stittsville, Orleans, Fitzroy Harbour, Carp,
                  Dunrobin, Kemptville, Barrhaven, Westboro, and more.
                </li>
              </ul>
            </FlexItem>
          </Flex>
          <Socials>
            {/* <p className="italics upper">follow us:</p> */}
            <div>
              <a
                target="_popup"
                href="https://www.facebook.com/BFIRenovations/"
              >
                <img src={Facebook} alt="" />
              </a>
              <a target="_popup" href="https://www.instagram.com/bfirenos/">
                <img src={Instagram} alt="" />
              </a>
            </div>
          </Socials>
          <hr />
          <Copyright>
            <div>
              <LogoContainer>
                <img src={Logo} alt="" />
                {/* <h3 className="heading bold">{Info.name}</h3> */}
              </LogoContainer>
            </div>
            <ul>
              <li>Copyright&#169; 2021</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.bfirenovations.ca/terms-of-use"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.bfirenovations.ca/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author>
          <Container>
            <div>
              {/* <p>website by: </p> */}
              <a target="_popup" href="https://www.aarontonner.com">
                <img src={AaronTonnerWebSolutionsLogo} alt="" />
              </a>
            </div>
          </Container>
        </Author>
      </FooterWrapper>
    </div>
  )
}
