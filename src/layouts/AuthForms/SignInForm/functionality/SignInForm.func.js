import useFormikFormHook from 'hooks/customFormikFormHook';
import * as Yup from 'yup';

const useSignInFormHook = () => {
    const handleSignInSubmitHandler = (values) => {
        console.log(values);
    };

    const fieldTypes = [
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholderText: 'Xiomi Billing@gmail.com',
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
