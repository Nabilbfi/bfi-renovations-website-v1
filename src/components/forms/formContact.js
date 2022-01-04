import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import ContactInfo from "../contactInfo/withIcons"

const Text = styled.div`
  max-width: 70ch;
  width: 100%;
  p {
    color: var(--txt-dark-secondary);
  }
`

export default function FormContact() {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <h1 className="title">
            need a professional for your next home renovation?
          </h1>
          <p>
            No matter the project size, we would love to work on your next home
            renovation. Fill out the form below to get started:
          </p>
        </Text>
        <Flex>
          {/* flex item 1 */}
          <div>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="msg">* Message:</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="submit" />
            </form>
          </div>
          {/* flex item 2 */}
          <ContactInfo />
        </Flex>
      </Container>
    </Section>
  )
}
