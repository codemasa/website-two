import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SevenSegmentCounter from 'seven-segment-counter';
const buttonTags = {increment: "+", decrement:"-"};


const SSCProject = styled.div
`
  background-color: #EEDDCC;

`

const SSCProjectHeader = styled.div
`

  background-color: #CCDDEE;

`

const SSCProjectBody = styled.div
`

`

export default () => (

  <SSCProject>
    <SSCProjectHeader>
      ProjectHeader
    </SSCProjectHeader>
    <SSCProjectBody>
      Project Body
      <SevenSegmentCounter buttonClass="buttonClass" buttonTag={buttonTags} width={600} onColor={"#000000"} offColor={"#BBEEBB"} backgroundColor={"#AAFFAA"}/>
    </SSCProjectBody>
  </SSCProject>

)
