import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import useSignUpFormHook from './functionality/SignUpForm.func';
import styles from './layout/SignInForm.styles.default';

const useStyles = makeStyles(styles);

const SignUpForm = ({ handleSignIn }) => {
    const classes = useStyles();
    const { fieldTypes, formikProps, handleSignUp } = useSignUpFormHook(handleSignIn);
    return (
        <div>
            <div className={classes.signinview_topheader}>
                <Typography type="caption">Welcome</Typography>
                <Typography type="heading">Sign Up to Xiomi Billing</Typography>
            </div>
            <div>
                <Typography onClick={() => handleSignIn()} isLink type="caption">Already have a account?</Typography>
            </div>
            <form onSubmit={handleSignUp}>
                <AuthFormWrapper
                    formikProps={formikProps}
                    formFields={fieldTypes}
                />

                <div className={classes.signinview_formsubmitbtnwrapper}>
                    <Button onClick={handleSignUp} buttonType="primary-btn">Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
