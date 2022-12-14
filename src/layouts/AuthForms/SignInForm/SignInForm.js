import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import useSignInFormHook from './functionality/SignInForm.func';
import styles from './layout/SignInForm.styles.default';

const useStyles = makeStyles(styles);

const SignInForm = ({ handleSignUp }) => {
    const classes = useStyles();
    const {
        fieldTypes, formikProps, handleSignIn, loading,
    } = useSignInFormHook();
    return (
        <div>
            <div className={classes.signinview_topheader}>
                <Typography type="caption">Welcome Back</Typography>
                <Typography type="heading">Sign in to Xiomi Billing</Typography>
            </div>
            <div>
                <Typography onClick={() => handleSignUp()} isLink type="caption">Create one new account?</Typography>
            </div>
            <form onSubmit={handleSignIn}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                />

                <div className={classes.signinview_formsubmitbtnwrapper}>
                    {loading ? (
                        <>
                            <CircularProgress />
                        </>
                    ) : (<Button onClick={handleSignIn} buttonType="primary-btn">Sign In</Button>)}
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
