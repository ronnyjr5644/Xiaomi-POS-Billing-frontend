import { TextField as MuiTextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import styles from './layout/TextField.style.default';

const useStyles = makeStyles(styles);

const TextField = ({ onChange, ...otherProps }) => {
    const classes = useStyles();
    const [ value, setValue ] = useState('');

    useEffect(() => {
        const propValue = otherProps.value;
        if (propValue) {
            setValue(propValue);
        }
    }, []);

    return (
        <MuiTextField
            {...otherProps}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={onChange}
            className={classes.textFieldStyle}
            InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
            }}
            fullWidth
        />
    );
};

export default TextField;
