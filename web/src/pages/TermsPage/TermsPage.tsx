import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import terms from './terms.md'

const TermsPage = () => {
  const [markdown, setMarkdown] = useState('')
  fetch(terms)
    .then((response) => response.text())
    .then((text) => setMarkdown(text))
  return (
    <>
      <Metadata title="Terms" description="Terms page" />

      <h1>TermsPage</h1>
      <span>{markdown}</span>
    </>
  )
}

export default TermsPage
