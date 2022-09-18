import { SnackBarProvider } from 'contexts/snackbar/SnackBarContext';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ThemeWrapper from 'styles/theme/theme';

const RootContextProvider = ({
    children,
    appProps,
}) => (
    <>
        <Provider store={store}>
            <ThemeWrapper appProps={appProps}>
                <SnackBarProvider>
                    {children}
                </SnackBarProvider>
            </ThemeWrapper>
        </Provider>
    </>
);

export default RootContextProvider;
