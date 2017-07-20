import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    dispatchNewRoute(route) {
        browserHistory.push(route);
        this.setState({
            open: false,
        });

    }

    handleClickOutside() {
        this.setState({
            open: false,
        });
    }

    openNav() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <header>
                <div open={this.state.open}>
                    {
                      <div onClick={() => this.dispatchNewRoute('/login')}>
                          Albums
                      </div>
                    }
                </div>

            </header>

        );
    }
}
