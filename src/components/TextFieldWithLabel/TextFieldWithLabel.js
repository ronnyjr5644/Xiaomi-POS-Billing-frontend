import TextField from '@components/TextField/TextField';
import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';
import styles from './layout/TextFieldWithLabel.style.default';

const useStyles = makeStyles(styles);

const TextFieldWithLabel = ({ label, ...otherProps }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.labelWrapper}>
                <FormLabel>{label}</FormLabel>
            </div>
            <TextField {...otherProps} />
        </div>
    );
};

export default TextFieldWithLabel;
