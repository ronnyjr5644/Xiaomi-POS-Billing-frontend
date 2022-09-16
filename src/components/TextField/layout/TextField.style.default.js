const styles = ((theme) => ({
    borderRadius: theme.palette.radius,
    textFieldStyle: {
        '& .MuiInputBase-input': {
            padding: '17px 20px',
            fontSize: '15px',
            fontWeight: '500',
            color: theme.primaryColor,
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px #282828 inset',
            },
        },
        '& .Mui-error.MuiOutlinedInput-root': {
            color: theme.palette.helperTextWarningColor,
            borderColor: (props) => props?.error
                && theme.palette.helperTextWarningColor,
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.textFieldInputBackgroundColor,
            borderRadius: theme.palette.radius,
        },
    },
    floatingLabelFocusStyle: {
        '& .focused': {
            color: 'red',
        },
    },
}));

export default styles;
