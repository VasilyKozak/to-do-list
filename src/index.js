import React from 'react';
import ReactDom from 'react-dom';

import SearchPanel from './component/search-panel';
import AppHeader from './component/app-header';
import TodoList from './component/todo-list';
import ItemStatusFilter from "./component/item-status-filter";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build React App', important: true, id: 2 },
        { label: 'Make Awesome App', important: false, id: 3 }
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <TodoList todos={ todoData }/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));