import { useSnackBarContext } from 'contexts/snackbar/SnackBarContext';
import config from 'hooks/config.js/config';
import useCustomAxiosCall from 'hooks/customAxiosHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as Yup from 'yup';

const useSignInFormHook = () => {
    const { callApi } = useCustomAxiosCall();
    const { showSnackBar } = useSnackBarContext();
    const [ cookies, setCookie ] = useCookies([ 'user' ]);
    const handleSignInSubmitHandler = async (values) => {
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/signin`,
                method: 'POST',
            },
            body: {
                MI_ID: values?.email,
                Password: values?.password,

            },

        });
        if (response.status === 200) {
            showSnackBar({
                message: response?.data?.message || 'Logged in',
                open: true,
                type: 'success',

            });
            setCookie('user', response.data.token);
            console.log('response', response.data.token);
        }
    };
    useEffect(() => {
        console.log('cookies', cookies);
    }, [ cookies ]);
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
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholderText: 'Enter password',
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
        password: Yup.string()
            .min(8, 'too short')
            .max(26, 'too long')
            .required('Password is required'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSignInSubmitHandler, fieldTypes, {
        validationSchema: validation,
    });

    return {
        formikProps,
        handleSignIn: handleSubmit,
        fieldTypes,
    };
};

export default useSignInFormHook;
