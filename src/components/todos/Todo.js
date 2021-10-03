import React from 'react';

// 'this.props' is not necessary here because this ia functional component (not class component) which accepts props directly as an arg
const Todo = props => {
    return(
        <li>{props.text}</li>
    )
}

export default Todo;