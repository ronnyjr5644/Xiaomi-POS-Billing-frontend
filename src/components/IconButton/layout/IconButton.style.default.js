const styles = ((theme) => ({
    iconWrapper: {
        fill: theme.palette.primaryColor,
        height: '35px',
        width: '35px',
        cursor: 'default',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
        },
        '& svg': {
            height: '35px',
            width: '35px',
        },
    },
    withCursorPointer: {
        cursor: 'pointer',
    },
}));

export default styles;
