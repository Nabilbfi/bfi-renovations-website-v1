import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import { Info } from "../info"

import Logo from "../../images/logo.svg"

import { FaPhoneAlt } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoMdArrowDropdown } from "react-icons/io"

const device = {
  sm: "18em",
  md: "50em",
  lg: "65em",
}

const HeaderContact = styled.div`
  background: var(--clr-dark);
  padding: 1em 0 1em 0;
`

const TopWrapper = styled.div`
  color: var(--txt-light);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    justify-content: center;
  }
`

const Location = styled.p`
  @media screen and (max-width: ${device.lg}) {
    display: none;
  }
`

const TopLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  & > * + * {
    margin-left: 25px;
  }

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`

const GetQuote = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-accent);
  padding: 1em 1.33em;
  border-radius: 5px;
  box-shadow: var(--shadow);
  color: var(--txt-light);
  text-decoration: none;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s linear;

  & > * + * {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    background: var(--clr-accent-darker);
  }
`

const Header = styled.header`
  background: var(--clr-dark);
  box-shadow: var(--shadow-bottom);
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; */
  transition: top 0.5s ease-out;
`

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`

const LogoContainer = styled.div`
  margin-right: 2em;
  img {
    height: 120px;
  }
`

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 2em;
  }

  li {
    align-self: flex-start;
    margin-left: 2em;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      @media screen and (min-width: ${device.md}) {
        display: none;
      }
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11) {
      @media screen and (max-width: ${device.md}) {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 234px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const Dropdown = styled.li`
  /* hover display only on desktop */
  @media screen and (min-width: ${device.md}) {
    ul {
      position: absolute;
      z-index: 1000;
      display: none;
      opacity: 1;
      margin: 0;
      padding: 2em 2em 2em 1em;
      list-style-type: none;
      background: var(--clr-dark);

      li {
        a {
          color: var(--txt-light);
        }
      }
    }

    &:hover {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const StyledLinkTop = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: var(--fs-sm);
  color: var(--txt-light);
  transition: all 0.25s linear;

  // aligning text with dropdown icon
  // display: flex;
  // align-items: center;
  // gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`
const StyledLinkBottom = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.04em;
  color: var(--txt-light);
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-2);
    color: var(--txt-dark);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false)

  function toggleMenu() {
    navOpen(!nav)
  }

  return (
    <div>
      <HeaderContact>
        <Container>
          <TopWrapper>
            <Location className="bold caps">
              ottawa & surrounding areas
            </Location>
            <TopLinks>
              <li>
                <StyledLinkTop to="/">home</StyledLinkTop>
              </li>
              <li>
                <StyledLinkTop to="/about">about</StyledLinkTop>
              </li>
              <li>
                <StyledLinkTop to="/services">services</StyledLinkTop>
              </li>
              <li>
                <StyledLinkTop to="/gallery">gallery</StyledLinkTop>
              </li>
              <li>
                <StyledLinkTop to="/reviews">reviews</StyledLinkTop>
              </li>
              <li>
                <StyledLinkTop to="/contact">contact</StyledLinkTop>
              </li>
            </TopLinks>
            <GetQuote href="tel: 613-620-4340">
              <span>get quote</span>
              <FaPhoneAlt size={20} />
              <span>{Info.tel1}</span>
            </GetQuote>
          </TopWrapper>
        </Container>
      </HeaderContact>
      <Header>
        <Container>
          <BottomWrapper>
            <LogoContainer>
              <Link to="/">
                <img src={Logo} alt="bfi renovations" />
              </Link>
            </LogoContainer>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                {/* mobile only */}
                <li>
                  <StyledLinkBottom to="/">home</StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/about">about</StyledLinkBottom>
                </li>
                <Dropdown>
                  <StyledLinkBottom to="/services">
                    services
                    <IoMdArrowDropdown size={20} />
                  </StyledLinkBottom>
                  <ul>
                    <li>
                      <StyledLinkBottom to="/services/plumbing">
                        plumbing
                      </StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/services/electrical">
                        electrical
                      </StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/services/carpentry">
                        carpentry
                      </StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/services/interior">
                        interior
                      </StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/services/exterior">
                        exterior
                      </StyledLinkBottom>
                    </li>
                  </ul>
                </Dropdown>
                <li>
                  <StyledLinkBottom to="/gallery">gallery</StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/reviews">reviews</StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/contact">contact</StyledLinkBottom>
                </li>
                {/* mobile */}
                <li>
                  <StyledLinkBottom to="/services/plumbing">
                    plumbing
                  </StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/services/electrical">
                    electrical
                  </StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/services/carpentry">
                    carpentry
                  </StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/services/interior">
                    interior
                  </StyledLinkBottom>
                </li>
                <li>
                  <StyledLinkBottom to="/services/exterior">
                    exterior
                  </StyledLinkBottom>
                </li>
                {/* if need dropdowns */}
                {/* <Dropdown>
                  <StyledLinkBottom to="/">
                    plumbing
                    <IoMdArrowDropdown size={20} />
                  </StyledLinkBottom>
                  <ul>
                    <li>
                      <StyledLinkBottom to="/">link</StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/">link</StyledLinkBottom>
                    </li>
                    <li>
                      <StyledLinkBottom to="/">link</StyledLinkBottom>
                    </li>
                  </ul>
                </Dropdown> */}
              </NavList>
            </Nav>
          </BottomWrapper>
        </Container>
      </Header>
    </div>
  )
}
