import React from 'react';

const User = (props) => {
	return (
	<li className = "list-group-item"><span onClick= {this.editTodo}>
	 {props.children}
	}
	</span>
	</li>
	)
} 
export default User;