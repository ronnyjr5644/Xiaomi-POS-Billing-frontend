import { useFormik } from 'formik';

const useFormikFormHook = (validateSubmit = () => { }, formFields = [], formikOptions = {}) => {
    const createInitValue = (fields) => {
        let initValues = {};
        fields?.forEach((field) => {
            initValues = { ...initValues, [ field.name ]: field?.initialValue || '' };
        });

        return initValues;
    };

    const formikProps = useFormik({
        initialValues: createInitValue(formFields),
        onSubmit: validateSubmit,
        enableReinitialize: true,
        ...formikOptions,
    });
    const {
        handleSubmit, errors, values, touched, handleBlur, handleChange,
        setFieldValue,
    } = formikProps;
    return {
        handleSubmit, errors, values, touched, handleBlur, handleChange, setFieldValue,
    };
};

export default useFormikFormHook;
