import useFormikFormHook from 'hooks/customFormikFormHook';
import * as Yup from 'yup';

const useSignUpFormHook = () => {
    const handleSignUpSubmitHandler = (values) => {
        console.log(values);
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
    };
};

export default useSignUpFormHook;
