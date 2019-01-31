import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import Project from '../components/Project.jsx';

const buttonTags = {increment: "+", decrement:"-"};
const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <Project />
    </Contents>

  </Page>
)
export default Projects
