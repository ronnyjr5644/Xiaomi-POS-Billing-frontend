import Button from '@components/Button/Button';
import Dialog from '@components/Dialog/Dialog';
import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import { useState } from 'react';
import SignInForm from 'src/layouts/AuthForms/SignInForm/SignInForm';

const HomepageView = () => {
    const [ modalState, setModalState ] = useState({
        signInModal: false,
    });
    return (
        <div>
            <DocumentHeader
                title="Xiomi Billing - Landing Page"
                description=""
            />
            <h1>HomepageView</h1>
            <Button
                onClick={() => setModalState({ ...modalState, signInModal: true })}
            >
                Sign In Modal
            </Button>

            <Dialog
                title=""
                open={modalState.signInModal}
                handleClose={() => setModalState({ ...modalState, signInModal: false })}
                maxWidth="xs"
            >
                <SignInForm />
            </Dialog>
        </div>
    );
};

export default HomepageView;
