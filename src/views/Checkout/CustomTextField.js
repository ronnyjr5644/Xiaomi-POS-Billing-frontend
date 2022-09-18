import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function FormInput({ name, label, required, onChange }) {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => <TextField fullWidth onChange={onChange} control={control} name={name} label={label} required={required} error={isError} />}
                name={name}
                control={control}
                label={label}
                fullWidth
                required={required}
                error={isError}
            />
        </Grid>
    );
}

export default FormInput;
