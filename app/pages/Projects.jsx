import React from 'react';
import Helmet from 'react-helmet-async';
import SevenSegmentCounter from 'seven-segment-counter';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';

const buttonTags = {increment: "+", decrement:"-"};
const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <SevenSegmentCounter buttonTag={buttonTags} className="ssc" width={600} onColor={"#000000"} offColor={"#BBEEBB"} backgroundColor={"#AAFFAA"}/>
    </Contents>

  </Page>
)
export default Projects
