import React from 'react';
import Helmet from 'react-helmet-async';
import SevenSegmentCounter from 'seven-segment-counter';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';

const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <SevenSegmentCounter height={75} width={300} onColor={"#FFFFFF"} offColor={"#444444"} backgroundColor={"#000000"}/>
    </Contents>

  </Page>
)
export default Projects
