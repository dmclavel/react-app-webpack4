import React from 'react';

import classes from './Image.css';
import ReactImage from '../../../assets/react.png';

const image = () => (
    <div className={classes.Image}>
        <img src={ReactImage} />
    </div>
);

export default image;