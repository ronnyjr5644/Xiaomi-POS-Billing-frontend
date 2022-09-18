const styles = ((theme) => ({
    dialogWrapper: {
        '& .MuiBackdrop-root': {
            backgroundColor: theme.palette.textColorDisabledLight,
        },
        '& .MuiDialog-paper': {
            position: 'relative',
            background: theme.palette.backgroundColorSecondary,
            [ theme.breakpoints.down('sm') ]: {
                position: 'absolute',
                bottom: 0,
            },
        },
        '& .actionWrapper': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-end',
            marginBottom: 'unset !important',
        },
        '& .MuiPaper-root': {
            [ theme.breakpoints.down('sm') ]: {
                margin: 'unset',
                width: '100%',
            },

        },
    },
    dialogWrapperOnMobile: {
        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        '& .MuiDialog-paper': {
            position: 'absolute',
            bottom: '0',
            background: theme.palette.DialogPaperCard,
        },
        '& .actionWrapper': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-end',
            marginBottom: 'unset !important',
        },
        '& .MuiPaper-root': {
            [ theme.breakpoints.down('sm') ]: {
                margin: 'unset',
                width: '100%',
            },

        },
    },
    fullScreenDialogWrapperOnMobile: {
        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        '& .MuiDialog-paper': {
            position: 'absolute',
            bottom: '0',
            background: theme.palette.DialogPaperCard,
        },
        '& .actionWrapper': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-end',
            marginBottom: 'unset !important',
        },
        '& .MuiPaper-root': {
            [ theme.breakpoints.down('sm') ]: {
                margin: 'unset',
                width: '100%',
                height: '100%',
            },

        },
    },
    dialogTitleWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dialogSubTitleWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 24px',
        justifyContent: 'space-between',
    },
    dialogCloseIconWrapper: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
}));

export default styles;
