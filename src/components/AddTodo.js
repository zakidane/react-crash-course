import React from 'react'

export class AddTodo extends React.Component {

	state = {
		title: ''
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.AddTodo(this.state.title);
		this.setState({title: ''})
	}
	onChange = (e) => {
		this.setState({title: e.target.value});
	}

	render() {
		return (
			<form style={{display: 'flex'}} onSubmit={this.onSubmit}>
				
				<input type="text" name="title" 
				placeholder="Add Todo..." style={{flex: '10', padding: '5px'}} 
				value={this.state.title}
				onChange={this.onChange}/>
				<input type="submit" value="Submit" 
				className="btn" style={{flex:'1'}}
				/>
			</form>
		)
	}
}

export default AddTodo