import React from 'react';
import classes from './Button.module.css'

const MyButton = ({onClick, children, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={classes.button}>
            {children}
        </button>
    );
};

export default MyButton;