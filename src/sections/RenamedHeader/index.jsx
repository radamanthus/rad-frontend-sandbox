import React from 'react'

import './styles.css'

/*
 * @prop {string} fontSize - Font Size
 */
const RenamedHeader = (fontSize) => {
  return (
    <h1 class="header" style={{fontSize:{fontSize}}}>Hello, World!</h1>
  )
}

export default RenamedHeader
