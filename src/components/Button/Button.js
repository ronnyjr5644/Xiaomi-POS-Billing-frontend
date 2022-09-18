import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/Button.style.default';

const useStyles = makeStyles(styles);

const Button = ({
    children,
    className = '',
    type = '',
    buttonType = 'primary-btn',
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <MuiButton type={buttonType} {...otherProps} className={`${ classes.buttonStyles } ${ className } ${ type }`}>
            {children}
        </MuiButton>
    );
};

export default Button;

/*
    type= {'primary-btn'}
*/
