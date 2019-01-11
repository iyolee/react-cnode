import React from 'react'
import styled from 'styled-components'

const navList = [
	{
		name: '全部',
		index: 1
	},
	{
		name: '精华',
		index: 2
	},
	{
		name: '分享',
		index: 3
	},
	{
		name: '问答',
		index: 4
	},
	{
		name: '招聘',
		index: 5
	},
	{
		name: '客户端测试',
		index: 6
	}
]

const NavBarView = styled.ul`
  display: inline-block;
`

const NavBarItem = styled.li``

export const NavBar = () => {
  <NavBarView>
    {navList.map(item => (
      <NavBarItem key={item.index}>{item.name}</NavBarItem>
    ))}
  </NavBarView>
}
