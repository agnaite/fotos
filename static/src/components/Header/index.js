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
            <nav className="navbar navbar-default">
                <div className="container-fluid" open={this.state.open}>
                  <div className="navbar-header">
                      <a className="navbar-brand" href="/">Fotos</a>
                        <ul className="nav navbar-nav navbar-right">
                          <li><a href='#' onClick={() => this.dispatchNewRoute('/albums')}>Albums</a></li>
                          <li><a href='#' onClick={() => this.dispatchNewRoute('/create-album')}>Create Album</a></li>
                          <li><a href='#' onClick={() => this.dispatchNewRoute('/main')}>Home</a></li>
                        </ul>
                  </div>
                </div>
            </nav>
        );
    }
}
