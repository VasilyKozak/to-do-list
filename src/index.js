import React from 'react';
import ReactDom from 'react-dom';
import SearchPanel from './component/search-panel';
import AppHeader from './component/app-header';
import TodoList from './component/todo-list';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));