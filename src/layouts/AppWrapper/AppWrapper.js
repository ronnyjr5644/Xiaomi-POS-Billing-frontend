import { makeStyles } from '@mui/styles';
import { CookiesProvider } from 'react-cookie';
import Header from '../Header/Header';
import styles from './layout/AppWrapper.styles.default';

const useStyles = makeStyles(styles);

const AppWrapper = ({
    children,
}) => {
    const classes = useStyles();

    return (
        <CookiesProvider>
            <div className={classes.appwrapper_container}>
                <Header  />
                {children}

            </div>
        </CookiesProvider>
    );
};

export default AppWrapper;
