import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  background-color: #444;
`

const Image = styled.img`
  display: block;
  width: 10%;
  height: 100%;
  margin-left: 5%;
`

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HeaderWrapper>
        <Image src="../public/images/cnodejs_light.svg" alt="cnode logo"/>
      </HeaderWrapper>
    )
  }
}

export default Header
