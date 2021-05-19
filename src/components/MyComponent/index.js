import React from 'react'

import './styles.css'

/**
 * @typedef {{
 *   data: import('lde/interop').Reference<typeof Data>
 *   fontSize: number
 * }} HeaderProps
 *
 * @param {HeaderProps} props
 */
const Header = (fontSize) => {
  return (
    <h1 class="header" style={{fontSize:{fontSize}}}>Hello, World!</h1>
  )
}

export default Header
