import React from 'react'
import Helmet from 'react-helmet-async'
import Page from '../components/Page.jsx'
import Contents from '../components/Contents.jsx'

const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <Contents>
      Follow me <a href="https://www.twitter.com/codymasao" target="_blank">@codymasao</a>
    </Contents>

  </Page>
)
export default Home
