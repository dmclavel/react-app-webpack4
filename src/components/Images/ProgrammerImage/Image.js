import React from 'react';

import classes from './Image.css';
import ProgrammerImage from '../../../assets/programmer.jpg';

const image = () => (
    <div className={classes.Image}>
        <div className={classes.Darker}>
            <img src={ProgrammerImage} />
            <section>
                <p> This is a sample page to show Lazy Loading concept in React JS.</p>
                <p> You can also import both lazy and Suspense from the react library should you wish to use another method. </p>
            </section>
        </div>
    </div>
);

export default image;