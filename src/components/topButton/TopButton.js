import React, { useState } from 'react'
import './TopButton.css'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Link } from 'react-scroll'

const TopButton = () => {

  const [topButtonVisible, setTopButtonVisible] = useState(false)

  // Cuando el usuario se desplace 20 píxeles hacia abajo desde la parte superior del documento, muestre el botón
  const scrollFunction = () => {
    if (
      document.body.scrollTop > window.innerHeight + 63 ||
      document.documentElement.scrollTop > window.innerHeight + 63
    ) {
      setTopButtonVisible(true)
    } else {
      setTopButtonVisible(false)
    }
  }
  window.onscroll = function () {
    scrollFunction()
  }
  window.onload = function () {
    scrollFunction()
  }

  const checkScrollTop = () => {
		if (!topButtonVisible && window.pageYOffset > 400){
		  setTopButtonVisible(true)
		} else if (topButtonVisible && window.pageYOffset <= 400){
		  setTopButtonVisible(false)
		}
	  };

	  const scrollTop = () =>{
		window.scrollTo({top: 0, behavior: 'smooth'});
	  };
	
	  window.addEventListener('scroll', checkScrollTop)

  return (
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      offset={-63}
      onClick={() => scrollTop()}
    >
      <button
        className={'topButton ' + (topButtonVisible ? 'on' : 'off')}
        title="Go to top"
      >
        <i aria-hidden="true">
          <ArrowUpwardIcon />
        </i>
      </button>
    </Link>
  )
}

export default TopButton
