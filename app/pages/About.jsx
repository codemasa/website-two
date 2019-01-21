import React from 'react'
import Helmet from 'react-helmet-async'
import Page from '../components/Page.jsx'
import Contents from '../components/Contents.jsx'

const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      This is the about page
    </Contents>

  </Page>
)
export default About
