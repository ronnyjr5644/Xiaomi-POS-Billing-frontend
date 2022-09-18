import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/Typography.style.default';

const useStyles = makeStyles(styles);

const Typography = ({
    type = 'body1',
    muted = false,
    isLink = false,
    children,
    className = '',
    textTransform = 'normal',
    fontStyle = 'normal',
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <>
            <MuiTypography
                className={`${ classes.textStyle } ${ type } ${ isLink && 'link' } ${ muted && 'text-muted' } ${ className }`}
                style={{ textTransform, fontStyle }}
                {...otherProps}
            >
                {children}
            </MuiTypography>
        </>
    );
};

export default Typography;

/*
    type= {'big-title' || 'heading' || 'sub-title1'
            || 'sub-title2' || 'body1' || 'caption' || 'link' }
*/
