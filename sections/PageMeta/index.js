import React from 'react'
import { Helmet } from 'react-helmet-async'

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

