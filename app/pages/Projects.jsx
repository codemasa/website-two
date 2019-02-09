import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import SSCProject from '../components/SSCProject.jsx';

import projectDesc from '../resources/descriptions.json';

const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <SSCProject description={projectDesc.ssc}/>
    </Contents>

  </Page>
)
export default Projects
