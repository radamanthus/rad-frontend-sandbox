import React from 'react'

import './styles.css'

/*
 * @prop {string} fontSize - Font Size
 */
const Header = (fontSize) => {
  return (
    <h1 class="header" style={{font-size:{fontSize}px}}>Hello, World!</h1>
  )
}

export default Header
