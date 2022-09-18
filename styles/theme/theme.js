// colors
import { CacheProvider } from '@emotion/react';
import {
    createTheme, ThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import createEmotionCache from 'utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const primaryColor = '#04b494';

export const themeColor = {
    primaryColor,
    buttonColors: {
        btnBgColor: primaryColor,
        btnTxtColor: '#ffffff',
        btnHoverBgColor: `${ primaryColor }aa`,
        btnFadeColor: `${ primaryColor }44`,    // light shade of primary color
        btnTransparentColor: '#6c6c6c00',   // transparent color
    },
};

// material ui theme wrapper obj

const ThemeWrapper = ({ children, appProps }) => {
    const { emotionCache = clientSideEmotionCache } = appProps;

    const currentTheme = 'light';

    const fonts = [
        'Poppins', 'sans-serif',
    ].join(', ');

    const globalTheme = React.useMemo(
        () => createTheme({
            // shadows: [ 'none' ],
            typography: {
                caption: {
                    fontFamily: fonts,
                },
                fontFamily: fonts,
            },
            // breakpoints
            breakpoints: {
                values: {
                    xs: 320,
                    sm: 600,
                    md: 900,
                    laptop: 1024,
                    lg: 1200,
                    laptoplg: 1440,
                    xl: 1536,
                },
            },
            palette: {
                mode: currentTheme,
                ...themeColor,
            },
        }),
        [ currentTheme ],
    );

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={globalTheme}>
                <div className={`theme-${ currentTheme }`}>
                    {children}
                </div>
            </ThemeProvider>
        </CacheProvider>

    );
};

export default ThemeWrapper;
