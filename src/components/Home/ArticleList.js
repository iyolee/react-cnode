import React, { Component } from 'react'
import styled from 'styled-components'

const navList = ['全部', '精华', '分享', '问答', '招聘', '客户端测试']

const NavBar = styled.nav`
	ul {
		display: inline-block;
	}
`
class ArticleList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<NavBar>
					{navList.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</NavBar>
			</div>
		)
	}
}

export default ArticleList
