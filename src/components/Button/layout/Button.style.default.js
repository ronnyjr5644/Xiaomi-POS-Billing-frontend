const styles = ((theme) => ({
    buttonStyles: {
        '&.MuiButtonBase-root': {
            backgroundColor: theme.palette.buttonColors.btnBgColor,
            color: theme.palette.buttonColors.btnTxtColor,
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            '&.primary-btn': {
                backgroundColor: theme.palette.primaryColor,
                height: '21px',
                padding: '15px',
                [ theme.breakpoints.down('sm') ]: {
                    flexGrow: '1',
                },

                '&:disabled': {
                    opacity: '0.4',
                },
            },
        },
        '&.MuiButtonBase-root:hover': {
            backgroundColor: theme.palette.buttonColors.btnHoverBgColor,
        },
    },
}));

export default styles;
