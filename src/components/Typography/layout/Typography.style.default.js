const styles = ((theme) => ({
    textStyle: {
        '&.text-muted': {
            opacity: 0.5,
        },
        '&.link': {
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        '&.big-title': {
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: '1.16',
            letterSpacing: '0em',
        },
        '&.heading': {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.33',
            letterSpacing: '0em',
        },
        '&.sub-title1': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
        },
        '&.sub-title2': {
            fontWeight: 500,
            [ theme.breakpoints.down('sm') ]: {
                fontSize: '0.70rem',
                lineHeight: '1.5',
                letterSpacing: '0.030em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '0.85rem',
                lineHeight: '1.57',
                letterSpacing: '0.009em',
            },

        },
        '&.body1': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            letterSpacing: '0.009em',
        },
        '&.caption': {
            [ theme.breakpoints.down('sm') ]: {
                fontWeight: 400,
                fontSize: '0.5rem',
                lineHeight: '1.66',
                letterSpacing: '0.0033em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontWeight: 400,
                fontSize: '0.70rem',
                lineHeight: '1.66',
                letterSpacing: '0.0033em',
            },
        },

    },
}));

export default styles;
