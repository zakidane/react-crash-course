import React, { Component } from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
	background: 'red',
	color: 'white', 
	border: 'none', 
	padding: '5px 8px', 
	borderRadius: '50%', 
	cursor: 'pointer', 
	float: 'right'
}


export class TodoItem extends Component {
	getStyle = () =>{
		return {
			background: 'grey',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render() {
		const {id, title} = this.props.todo
		return (
			<div style={this.getStyle()}>
				<h3>{this.props.todo.completed}</h3>
				<p>
				<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
				{title}
				<button  onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>

				</p>

			</div>
		)
	}
	
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}



export default TodoItem