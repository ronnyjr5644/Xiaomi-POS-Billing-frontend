import React from 'react';
import { Dialog as MuiDialog } from '@mui/material';
import DialogTitle  from '@mui/material/DialogTitle';
import DialogContent  from '@mui/material/DialogContent';
import Typography from '@components/Typography/Typography';
import IconButton from '@components/IconButton/IconButton';
import assets from 'assets';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import styles from './layout/Dialog.styles.default';

const useStyles = makeStyles(styles);

const Dialog = ({
    open = false, handleClose = () => { }, title = 'hello', children, maxWidth = 'sm', subtitle = false, isFullScreen = false,
}) => {
    const { icons: { CloseIcon, ChevronDownOutline } } = assets;
    const classes = useStyles(isFullScreen);
    const { isSmallDevice } = useDeviceTypeHook();
    let dialogClass;
    if (isFullScreen && isSmallDevice) {
        dialogClass = classes.fullScreenDialogWrapperOnMobile;
    } else if (isSmallDevice && !isFullScreen) {
        dialogClass = classes.dialogWrapperOnMobile;
    } else {
        dialogClass = classes.dialogWrapper;
    }
    return (
        <MuiDialog
            onClick={(e) => e.stopPropagation()}
            open={open}
            aria-labelledby="generic-dialog-title"
            aria-describedby="generic-dialog-description"
            fullWidth
            maxWidth={maxWidth}
            className={dialogClass}
        >
            <DialogTitle>
                <div className={classes.dialogCloseIconWrapper}>
                    <IconButton onClick={handleClose} className={classes.closeIconWrapper}>
                        {isFullScreen ? (<ChevronDownOutline />) : (<CloseIcon />)}
                    </IconButton>
                </div>
                <div className={classes.dialogTitleWrapper}>
                    <Typography textTransform="capitalize" type="heading">{title}</Typography>

                </div>
            </DialogTitle>
            {subtitle && (
                <div className={classes.dialogSubTitleWrapper}>
                    <Typography type="sub-title2" muted textTransform="capitalize">Share to other plateforms</Typography>
                </div>
            )}

            <DialogContent>
                {children}
            </DialogContent>
        </MuiDialog>

    );
};

export default Dialog;
