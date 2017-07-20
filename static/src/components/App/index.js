import React from 'react';

/* application components */
import { Header } from '../../components/Header';

/* global styles for app */
import './styles/app.scss';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        children: React.PropTypes.node,
    };

    render() {
        return (
            <div>
                <section>
                    <Header />
                    <div
                      className="container"
                      style={{ marginTop: 10, paddingBottom: 250 }}>
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}

export { App };
