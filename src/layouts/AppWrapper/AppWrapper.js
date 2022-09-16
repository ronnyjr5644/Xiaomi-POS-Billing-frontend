import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './layout/AppWrapper.styles.default';

const useStyles = makeStyles(styles);

const AppWrapper = ({
    children,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.appwrapper_container}>{children}</div>
    );
};

export default AppWrapper;
