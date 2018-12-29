import React, { Component } from 'react';

import ReactImage from '../../components/Images/ReactImage/Image';
import WebpackImage from '../../components/Images/WebpackImage/Image';
import classes from './ReactPage.css';

class ReactPage extends Component {
    render () {
        return (
            <div className={classes.ReactPage}>
                <div className={classes.InlineImages}>
                    <ReactImage />
                    <WebpackImage />
                </div>
                <h3>
                    React App Boilerplate using Webpack 4
                </h3>
                <section>
                    If you're having trouble setting up the project, please read the description 
                    <a style={{textDecoration: 'none'}} href="https://github.com/dmclavel/react-app-webpack4" target="_blank"> here</a>. 
                </section>
            </div>
        );
    }
}

export default ReactPage;