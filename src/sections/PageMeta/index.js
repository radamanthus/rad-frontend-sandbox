import React from 'react'
import { Helmet } from 'react-helmet-async'

// A very small change
// that will end up
// busting all the variables for this section
const PageMeta = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
export default PageMeta

