import React from "react";

const items = ['Learn React', 'Build Awesome App'];

const TodoList = () => {
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

export default TodoList;