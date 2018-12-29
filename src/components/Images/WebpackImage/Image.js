import React from 'react';

import classes from './Image.css';
import WebpackImage from '../../../assets/webpack.png';

const image = () => (
    <div className={classes.Image}>
        <img src={WebpackImage} />
    </div>
);

export default image;