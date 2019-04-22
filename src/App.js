import React, { Component } from 'react';

import Header from './components/Header/index';
import ImageGrid from './components/ImageGrid';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ImageGrid />
            </React.Fragment>

        );
    }
}

export default App;