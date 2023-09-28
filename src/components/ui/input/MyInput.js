import React from 'react';
import classes from './Input.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.input} {...props}/>

    );
};

export default MyInput;