import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useDeviceTypeHook = () => {
    const theme = useTheme();

    const isMediumDevice = useMediaQuery(theme.breakpoints.only('md'));
    const extraLargeDevice = useMediaQuery(theme.breakpoints.up('md'));
    const isLaptopDevice = useMediaQuery(theme.breakpoints.only('laptop'));
    const isLaptopLargeDevice = useMediaQuery(theme.breakpoints.only('laptoplg'));

    const isMobileSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm')) && !isMobileSmallDevice;
    const isLargeDevice = useMediaQuery(theme.breakpoints.not('md')) && !isSmallDevice && extraLargeDevice;
    const isTabletDevice = useMediaQuery(theme.breakpoints.up('sm')) && (!isSmallDevice && !extraLargeDevice && !isMediumDevice);
    const isSmallLaptopDevice  = useMediaQuery(theme.breakpoints.down('lg'));

    return {
        isTabletDevice,
        isLaptopLargeDevice,
        isMediumDevice,
        isSmallDevice,
        isLargeDevice,
        isLaptopDevice,
        isMobileSmallDevice,
        isSmallLaptopDevice,
    };
};

export default useDeviceTypeHook;
