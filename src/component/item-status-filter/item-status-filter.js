import React, { Component } from "react";

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = name === filter;
            const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

            return (
                <button key={name}
                        type='button'
                        placeholder='What needs to be done?'
                        onClick={() => onFilterChange(name)}
                        className={ classNames }>{ label }</button>
            );
        });

        return (
            <div>
                { buttons }
            </div>
        );
    };
};

