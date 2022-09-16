import { createContext, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import styles from './layout/SnackBarcontext.style.default';
import snackbarSelector from '../../redux/selectors/snackbar.selector';
import SnackbarActions from '../../redux/actions/snackbar.actions';

const SnackBarContext = createContext(null);
const useStyles = makeStyles(styles);

const SnackBarProvider = ({ children }) => {
    const reduxDispatch = useDispatch();
    const { setSnackbarObj, clearSnackbarObj } = SnackbarActions;
    const snackBarObj = useSelector(snackbarSelector?.getSnackbarState);

    /*
        // snackBar obj
        {
            message: '',
            type: '',
            open: false,
        }
    */

    const showSnackBar = (options) => {
        reduxDispatch(setSnackbarObj({
            ...snackBarObj,
            ...options,

        }));
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        reduxDispatch(clearSnackbarObj());
    };
    const value = {
        showSnackBar,
        snackBarObj,
    };
    const classes = useStyles();

    return (
        <SnackBarContext.Provider value={value}>
            {children}
            <Snackbar open={snackBarObj?.open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert
                    className={classes.snackbarText}
                    onClose={handleClose}
                    severity={snackBarObj?.type || 'info'}
                    sx={{ width: '100%' }}
                >
                    {snackBarObj.message?.toLocaleLowerCase().replace(/_/g, ' ').trim()}
                </MuiAlert>
            </Snackbar>
        </SnackBarContext.Provider>
    );
};

const useSnackBarContext = () => {
    const context = useContext(SnackBarContext);
    return context;
};

export { SnackBarProvider, useSnackBarContext };
