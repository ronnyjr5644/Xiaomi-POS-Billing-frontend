import { makeStyles } from '@mui/styles';
import Header from '../Header/Header';
import styles from './layout/AppWrapper.styles.default';

const useStyles = makeStyles(styles);

const AppWrapper = ({
    children,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.appwrapper_container}>
            <Header  />
            {children}

        </div>
    );
};

export default AppWrapper;
