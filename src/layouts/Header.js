import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
	position: relative;
	width: 100%;
	background-color: #444;
`

const Image = styled.img`
	width: 10%;
	height: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-left: 5%;
`

const Search = styled.input`
	width: 220px;
	height: 34px;
	border-radius: 20px;
	padding-left: 6px;
	border: none;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	margin-left: 20px;
`

const NavList = styled.ul`
  height: 24px;
	position: absolute;
  right: 30px;
	top: 0;
	bottom: 0;
	margin: auto;
`

const NavItem = styled.li`
  display: inline-block;
  
  a {
    color: #eee;
    font-size: 14px;
    padding: 20px;

    &:hover {
      color: #fff;
      text-decoration: none;

    }
  }
`

const navList = [
	{
		nav: '首页',
		id: 1,
		link: '/'
	},
	{
		nav: '新手入门',
		id: 2,
		link: '/'
	},
	{
		nav: 'API',
		id: 3,
		link: '/'
	},
	{
		nav: '关于',
		id: 4,
		link: '/'
	},
	{
		nav: '注册',
		id: 5,
		link: '/'
	},
	{
		nav: '登录',
		id: 6,
		link: '/'
	}
]

class HeaderBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	_onChangeInputValue = event => {
		if (event.target.value.length > 30) {
			return
		}
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return (
			<HeaderWrapper>
				<a href="/">
					<Image src="../public/images/cnodejs_light.svg" alt="cnode logo" />
				</a>
				<Search value={this.state.value} onChange={this._onChangeInputValue} />
				<NavList>
					{navList.map(item => (
						<NavItem key={item.id}>
							<a href="">{item.nav}</a>
						</NavItem>
					))}
				</NavList>
			</HeaderWrapper>
		)
	}
}

export default HeaderBar
