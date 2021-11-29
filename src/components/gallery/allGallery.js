import React from "react"
import styled from "styled-components"
import { Section, Container, GridThree } from "../layoutComponents"
import { Link, graphql } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"
import { StaticImage } from "gatsby-plugin-image"

import Gazebo1 from "../../images/projects/gazebo-1/gazebo-1.jpg"
import Deck1 from "../../images/projects/deck-1/deck-1.jpg"
import Deck2 from "../../images/projects/deck-2/deck-1.jpg"
import BathroomVanity1 from "../../images/projects/bathroom-vanity-1/bathroom-vanity-1.jpg"
import StepsAndPlanters from "../../images/projects/steps-and-planters/steps-and-planters-1.jpg"
import Exterior1 from "../../images/projects/exterior-1/exterior-1.jpg"
import Drywall1 from "../../images/projects/drywall-1/drywall-1.jpg"
import Lighting1 from "../../images/projects/lighting-1/lighting-1.jpg"
import Interior1 from "../../images/projects/interior-1/interior-1.jpg"
import BathroomShower1 from "../../images/projects/bathroom-shower-1/bathroom-shower-1.jpg"
import GasStoveInstall1 from "../../images/projects/gas-stove-install-1/gas-stove-install-1.jpg"
import MicrowaveHoodFanInstall1 from "../../images/projects/microwave-hood-fan-install-1/microwave-hood-fan-install-1.jpg"
import HoodFanReplacement1 from "../../images/projects/hood-fan-replacement-1/hood-fan-replacement-1.jpg"
import Carpentry1 from "../../images/projects/carpentry-1/carpentry-1.jpg"
import Interior2 from "../../images/projects/interior-2/interior-1.jpg"
import Fence1 from "../../images/projects/fence-1/fence-1.jpg"
import Cabinets1 from "../../images/projects/cabinets-1/cabinets-1.jpg"
import bathroomRen from "../../images/projects/bathroom-renovations/img_br_02_11_2021_1.jpg"
import plumbingUpd from "../../images/projects/plumbing-upgrade/img_pu_02_11_2021_1.jpg"
import FoyerTileUpd from "../../images/projects/foyer-tile-upgrade/img_ftu_02_11_2021_1.jpg"
import ShowerUpd from "../../images/projects/shower-upgrade/img_su_02_11_2021_1.jpg"
import HotTubCarp from "../../images/projects/hot-tub-carpentry/img_htc_02_11_2021_1.jpg"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: auto 2em auto;

  .all-gallery-img {
    grid-row: 1 / span 2;
    grid-column: 1 / -1;
    z-index: -1;
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--txt-dark);
`

const Text = styled.div`
  /* background: var(--clr-light-secondary);
  padding: 1em; */
`

const Button = styled.p`
  grid-row: 2 / span 2;
  grid-column: 2 / 3;
  padding: 1em;
  text-align: center;
  background: var(--clr-light-secondary);
  border: 1px solid var(--clr-accent);
  color: var(--clr-accent);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
`

const GalleryCard = (props, { data }) => {
  return (
    <StyledLink className="spacing-sm" to={props.to}>
      <Text>
        <p className="title--top">{props.location}</p>
        <h2 className="bold caps heading">{props.title}</h2>
      </Text>
      <GridWrapper>
        <img className="all-gallery-img" src={props.img} alt="" />
        <Button>
          <span>view project</span> <RiArrowRightSLine />
        </Button>
      </GridWrapper>
    </StyledLink>
  )
}

export default function AllGallery() {
  return (
    <GridThree>
      {/* 1 */}
      <GalleryCard
        to="/gallery/bathroom-renovations"
        img={bathroomRen}
        title="bathroom renovations"
        location="Orleans, ON"
      />
      {/* 2 */}
      <GalleryCard
        to="/gallery/plumbing-upgrade"
        img={plumbingUpd}
        title="Plumbing Upgrade"
        location="Goulburn, ON"
      />
      {/* 3 */}
      <GalleryCard
        to="/gallery/foyer-tile-upgrade"
        img={FoyerTileUpd}
        title="Foyer Tile Upgrade"
        location="Gloucester, ON"
      />
       {/* 4 */}
       <GalleryCard
        to="/gallery/shower-upgrade"
        img={ShowerUpd}
        title="Shower Upgrade"
        location="Orleans, ON"
      />
       {/* 5 */}
       <GalleryCard
        to="/gallery/hot-tub-carpentry"
        img={HotTubCarp}
        title="Hot Tub Carpentry"
        location="Kanata, ON"
      />

      {/*  */}
      <GalleryCard
        to="/gallery/gazebo-1"
        img={Gazebo1}
        title="gazebo rebuild"
        location="Kanata, ON"
      />
      <GalleryCard
        to="/gallery/deck-1"
        img={Deck1}
        title="deck rebuild"
        location="Rockland, ON"
      />
      <GalleryCard
        to="/gallery/bathroom-vanity-1"
        img={BathroomVanity1}
        title="bathroom vanity installation"
        location="Kanata, ON"
      />
      <GalleryCard
        to="/gallery/deck-2"
        img={Deck2}
        title="deck rebuild and refresh"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/steps-and-planters"
        img={StepsAndPlanters}
        title="outdoor steps and planters"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/exterior-1"
        img={Exterior1}
        title="exterior renovations"
        location="Orleans, ON"
      />
      <GalleryCard
        to="/gallery/drywall-1"
        img={Drywall1}
        title="drywall renovations"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/lighting-1"
        img={Lighting1}
        title="lighting installation"
        location="Riverside South, ON"
      />
      <GalleryCard
        to="/gallery/interior-1"
        img={Interior1}
        title="interior renovation"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/bathroom-shower-1"
        img={BathroomShower1}
        title="shower door installation"
        location="Manotick, ON"
      />
      <GalleryCard
        to="/gallery/gas-stove-install-1"
        img={GasStoveInstall1}
        title="gas stove installation"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/microwave-hood-fan-install-1"
        img={MicrowaveHoodFanInstall1}
        title="microwave hood fan"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/hood-fan-replacement-1"
        img={HoodFanReplacement1}
        title="hood fan replacement"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/carpentry-1"
        img={Carpentry1}
        title="custom carpentry"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/interior-2"
        img={Interior2}
        title="interior renovations"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/fence-1"
        img={Fence1}
        title="fence installation"
        location="Ottawa, ON"
      />
      <GalleryCard
        to="/gallery/cabinets-1"
        img={Cabinets1}
        title="cabinets installation"
        location="Ottawa, ON"
      />
    </GridThree>
  )
}
