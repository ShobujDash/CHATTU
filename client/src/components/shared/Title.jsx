import React from 'react'
import {Helmet} from "react-helmet-async"

function Title({title="Chat App",description="this is the chat app call cahttu"}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={ description} />
    </Helmet>
  )
}

export default Title
