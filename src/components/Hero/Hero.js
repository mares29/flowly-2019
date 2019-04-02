import PropTypes from 'prop-types'
import React from 'react'
import HpHero from './HpHero'
import SubHero from './SubHero'

const Hero = ({ hp, heading, text, bgImg }) =>
  hp ? <HpHero bgImg={bgImg} /> : <SubHero heading={heading} text={text} />

Hero.propType = {
  hp: PropTypes.boolean,
  title: PropTypes.object,
  text: PropTypes.text,
}

export default Hero
