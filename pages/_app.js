import React from 'react';
import RootContextProvider from 'contexts/RootContext/RootContextProvider';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const AppWrapper = dynamic(
    () => import('src/layouts/AppWrapper/AppWrapper'),
    { ssr: false },
);

const MyApp = (props) => {
    const {
        Component, pageProps, ...appProps
    } = props;

    return (
        <RootContextProvider appProps={appProps}>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </RootContextProvider>

    );
};

export default MyApp;
