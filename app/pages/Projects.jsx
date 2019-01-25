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
      <SevenSegmentCounter width={600} onColor={"#FFFFFF"} offColor={"#444444"} backgroundColor={"#000000"}/>
    </Contents>

  </Page>
)
export default Projects
