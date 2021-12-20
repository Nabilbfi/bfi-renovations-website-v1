import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"
import Stars from "./stars"
import Avatar from "./avatar"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
`

const Review = styled.div`
  background: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);

  p {
    font-style: italic;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--txt-dark);
`

export default function FeaturedTestimonial() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing-lg">
          <h3 className="title">featured reviews</h3>
          <div className="spacing">
            <Flex>
              <Review className="spacing">
                <Stars />
                <p>
                  "Nabil is very professional and friendly. He arrived on time
                  and the work was done to our standards and specifications of
                  what we wanted done. He replaced our front entrance floor with
                  tile, put down baseboards and quarter round and replaced
                  several screens in the windows and a door in the home. He is
                  multifaceted and his expertise shows in his work. We would
                  recommend him for anything you would need done in your home."
                </p>
                <Avatar company="home owner in Kanata" />
              </Review>
              <Review className="spacing">
                <Stars />
                <p>
                  "Efficient, very knowledgeable, even suggested that a new ramp
                  was not required and a simple adjustment to my old ramp to
                  level it off thus saving me money on material. Totally happy
                  with his work and would not hesitate in recommending him."
                </p>
                <Avatar company="home owner in Ottawa" />
              </Review>
              <Review className="spacing">
                <Stars />
                <p>
                  "Nabil was polite friendly and efficient. My husband and I
                  highly recommend him and will definitely have him back to do
                  more jobs."
                </p>
                <Avatar company="home owner in Ottawa" />
              </Review>
            </Flex>
            <Link className="inline-link" to="/reviews">
              View all reviews &#8594;
            </Link>
          </div>
        </Container>
      </Section>
    </Wrapper>
  )
}
