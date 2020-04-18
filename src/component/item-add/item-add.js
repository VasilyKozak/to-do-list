import React, { Component } from "react";
import './item-add.css'

export default class ItemAdd extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
       this.setState({
           label: event.target.value
       });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className='bottom-panel d-flex'
                 onSubmit = { this.onSubmit}>

                <input type='text'
                        className='form-control new-todo-label'
                        onChange={ this.onLabelChange }
                        value = { this.state.label }
                        placeholder='What needs to be done?' />
                <button type='submit'
                        className='btn btn-outline-secondary'>Add</button>
            </form>
        );
    };
};