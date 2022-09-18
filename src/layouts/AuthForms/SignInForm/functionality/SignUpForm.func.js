import { useSnackBarContext } from 'contexts/snackbar/SnackBarContext';
import config from 'hooks/config.js/config';
import useCustomAxiosCall from 'hooks/customAxiosHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import modalAction from 'redux/actions/modal.action';
import * as Yup from 'yup';

const useSignUpFormHook = () => {
    const { callApi } = useCustomAxiosCall();
    const reduxDispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const handleSigninModal = (type) => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type, // SIGNIN SINGUP
            open: true,
        }));
    };
    const { showSnackBar } = useSnackBarContext();
    console.log('=>', showSnackBar);
    const handleSignUpSubmitHandler = async (values) => {
        setLoading(true);
        console.log('hit');
        console.log(values);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/signup`,
                method: 'POST',
            },
            body: {
                MI_ID: values?.email,
                Password: values?.password,
                operator_name: values?.name,

            },

        });
        if (response.status === 200) {
            setLoading(false);
            showSnackBar({
                message: response?.data?.message || 'Successfully Registered',
                open: true,
                type: 'success',

            });
            console.log('response', response.data.message);
            setTimeout(() => {
                setLoading(false);

                handleSigninModal('SIGNIN');
            }, 3000);
        } else {
            setLoading(false);
            showSnackBar({
                message: response?.data?.message || 'Attempt unsuccessful',
                open: true,
                type: 'error',

            });
        }
    };

    const fieldTypes = [
        {
            name: 'email',
            label: 'EMPLOYEE ID',
            type: 'text',
            placeholderText: 'billing@xiaomi.com',
            id: 0,
            disabled: false,
            initialValue: '',
        },
        {
            name: 'name',
            label: 'EMPLOYEE NAME',
            type: 'text',
            placeholderText: 'john doe',
            id: 0,
            disabled: false,
            initialValue: '',
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholderText: 'Enter password',
            id: 1,
            disabled: false,
            initialValue: '',
        },
        {
            name: 'confirmpassword',
            type: 'password',
            label: 'Confirm Password',
            placeholderText: 'Confirm password',
            id: 1,
            disabled: false,
            initialValue: '',
        },
    ];

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Provide a valid mail')
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
        name: Yup.string()
            .min(5, 'too short')
            .max(50, 'too long')
            .required('This field is required'),
        password: Yup.string()
            .min(8, 'too short')
            .max(26, 'too long')
            .required('Password is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSignUpSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    return {
        formikProps,
        handleSignUp: handleSubmit,
        fieldTypes,
        loading,
        handleSigninModal,
    };
};

export default useSignUpFormHook;
