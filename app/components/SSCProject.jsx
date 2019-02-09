import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SevenSegmentCounter from 'seven-segment-counter';
const buttonTags = {increment: "+", decrement:"-"};


const SSCProjectDiv= styled.div
`

`

const SSCProjectHeader = styled.h1
`
  text-align: left;
  font-size: 40px;
  padding-left: 20px;
`

const SSCProjectBody = styled.div
`
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
`
const SSCDiv = styled.div
`

`

class SSCProject extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <SSCProjectDiv>
      <SSCProjectHeader>
        Seven Segment Counter Node Module
      </SSCProjectHeader>
      <SSCProjectBody>
        This project was inspired by the Seven Segment Display on this <a target="_blank" href="https://youtu.be/MlRlgbrAVOs">YouTube video</a> by the "The Coding Train" and I extended it to be a counter. I also added the feature of being able to set it to a certain value programmatically as well as the ablilty to change its color scheme.

      </SSCProjectBody>
      <SSCDiv>
        <SevenSegmentCounter buttonClass="buttonClass" buttonTag={buttonTags} width={600} onColor={"#000000"} offColor={"#BBEEBB"} backgroundColor={"#AAFFAA"}/>
      </SSCDiv>
    </SSCProjectDiv>
    )
  }
}

export default SSCProject;
