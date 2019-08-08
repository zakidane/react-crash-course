import React from 'react'
import {Link} from 'react-router-dom'
const headerStyle = {

	background: '#333', 
	color: 'white', 
	textAlign: 'center', 
	padding: '10px'
}
function Header(){
	return (
		<header style={headerStyle}>
			<h1>To-Do List</h1>
			<Link to="/" style={headerStyle}>Home</Link> | <Link style={headerStyle} to="/about">About</Link>
		</header>
		)
}

export default Header