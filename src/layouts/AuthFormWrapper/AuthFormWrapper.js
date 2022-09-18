import TextFieldWithLabel from '@components/TextFieldWithLabel/TextFieldWithLabel';
import { makeStyles } from '@mui/styles';
import styles from './layout/AuthFormWrapper.style.default';

const useStyles = makeStyles(styles);

const AuthFormWrapper = ({
    formFields = [],
    formikProps,
}) => {
    const classes = useStyles();

    const {
        touched = [],
        errors = [],
        values = [],
        handleBlur,
        handleChange,
    } = formikProps;

    return (
        <div>
            {formFields.map((field) => {
                switch (field.type) {
                    case 'text':
                        return (
                            <div
                                key={field?.id}
                                className={classes.fieldWrapper}
                            >
                                <TextFieldWithLabel
                                    error={errors[ field?.name ] && touched[ field?.name ]}
                                    helperText={(errors[ field?.name ] && touched[ field?.name ]) && errors[ field?.name ]}
                                    onChange={handleChange}
                                    onInput={handleChange}
                                    onBlur={handleBlur}
                                    label={field?.label}
                                    placeholder={field?.placeholderText}
                                    name={field?.name}
                                    value={values[ field?.name ]}
                                    type={field?.type}
                                    fullWidth
                                    autoComplete="off"
                                />
                            </div>
                        );
                    default:
                        return (
                            <div
                                key={field?.id}
                                className={classes.fieldWrapper}
                            >
                                <TextFieldWithLabel
                                    error={errors[ field?.name ] && touched[ field?.name ]}
                                    helperText={(errors[ field?.name ] && touched[ field?.name ]) && errors[ field?.name ]}
                                    onChange={handleChange}
                                    onInput={handleChange}
                                    onBlur={handleBlur}
                                    label={field?.label}
                                    placeholder={field?.placeholderText}
                                    name={field?.name}
                                    value={values[ field?.name ]}
                                    type={field?.type}
                                    fullWidth
                                    autoComplete="off"
                                />
                            </div>
                        );
                }
            })}
        </div>
    );
};

export default AuthFormWrapper;
