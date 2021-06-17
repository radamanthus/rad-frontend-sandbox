import React from 'react'

import './styles.css'

/* QA: Edit component JS source AND CSS */
/*
 * @prop {string} fontSize - Font Size
 */
const Header = (fontSize) => {
  return (
    <h1 class="header" style={{fontSize:{fontSize}}}>Hello, World!</h1>
  )
}

export default Header
