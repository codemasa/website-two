import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SevenSegmentCounter from 'seven-segment-counter';
const buttonTags = {increment: "+", decrement:"-"};


const Project = styled.div
`
  background-color: #EEDDCC;

`

const ProjectHeader = styled.div
`

  background-color: #CCDDEE;

`

const ProjectBody = styled.div
`

`

export default () => (

  <Project>
    <ProjectHeader>
      ProjectHeader
    </ProjectHeader>
    <ProjectBody>
      Project Body
      <SevenSegmentCounter buttonClass="buttonClass" buttonTag={buttonTags} width={600} onColor={"#000000"} offColor={"#BBEEBB"} backgroundColor={"#AAFFAA"}/>
    </ProjectBody>
  </Project>

)
