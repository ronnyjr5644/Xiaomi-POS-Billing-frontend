import ImgMediaCard from '@components/Card/CardType';
import Dialog from '@components/Dialog/Dialog';
import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import { Grid } from '@mui/material';
import { inventory } from 'assets/currentStore';
import { useDispatch, useSelector } from 'react-redux';
import modalAction from 'redux/actions/modal.action';
import SignInForm from 'src/layouts/AuthForms/SignInForm/SignInForm';
import SignUpForm from 'src/layouts/AuthForms/SignInForm/SignUpForm';

const HomepageView = () => {
    const  reduxDispatch  = useDispatch();
    const handleSigninModal = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: 'SIGNIN', // SIGNIN SINGUP
            open: true,
        }));
    };
    console.log('base_data => ', inventory.data.base_data);
    const handleSignUpModal = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: 'SINGUP', // SIGNIN SINGUP
            open: true,
        }));
    };
    const handleClose = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: '', // SIGNIN SINGUP
            open: false,
        }));
    };
    const { modal } = useSelector((state) => state.modal);
    console.log('mm', modal);
    return (
        <div style={{ margin: 'auto 20px' }}>
            <DocumentHeader
                title="Xiomi Billing - Landing Page"
                description=""
            />
            <div style={{ marginTop: '50%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ].map((index) => (
                        <Grid item xs={2} sm={4} md={3} key={index}>
                            <ImgMediaCard />

                        </Grid>
                    ))}

                </Grid>
            </div>
            <Dialog
                title=""
                open={modal?.open}
                handleClose={() => handleClose()}
                maxWidth="xs"
            >
                {modal.type === 'SIGNIN' && (<SignInForm handleSignUp={handleSignUpModal} />)}
                {modal.type === 'SINGUP' && (<SignUpForm handleSignIn={handleSigninModal} />)}
            </Dialog>
        </div>
    );
};

export default HomepageView;
