import { IconButton as MuiIconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/IconButton.style.default';

const useStyles = makeStyles(styles);

const IconButton = ({
    children, className,
    onClick, withCursorPointer = true,
    size = 'small',
    ...otherprops
}) => {
    const classes = useStyles();
    return (
        <MuiIconButton
            onClick={onClick}
            size={size}
            className={`${ classes.iconWrapper } ${ withCursorPointer && classes.withCursorPointer } ${ className }`}
            {...otherprops}
        >
            {children}
        </MuiIconButton>
    );
};

export default IconButton;
