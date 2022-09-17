import {
    Button, Grid, InputLabel, MenuItem, Select, Typography
} from '@mui/material';
import { STATE } from 'assets/currentStore';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FormInput from './CustomTextField';

const Checkout = () => {
    const [ shippingState, setShippingState ] = useState('');
    const [ cities, setCities ] = useState();
    const [ city, setCity ] = useState('');
    const [ storeId, setStoreId ] = useState('');
    const methods = useForm();

    const fetchCities = async (state) => {
        STATE.map((item) => {
            if (item.state === state) {
                setCities(item.districts);
            }
        });
    };

    useEffect(() => {
        if (shippingState) { fetchCities(shippingState); }
    }, [ shippingState ]);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => test({
                    ...data,
                }))}
                >
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address line 1" />
                        <FormInput required name="email" label="Email" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store State</InputLabel>
                            <Select value={shippingState} fullWidth onChange={(e) => setShippingState(e.target.value)}>
                                {STATE.map((item) => (
                                    <MenuItem key={item.state} value={item.state}>
                                        {item.state}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store City</InputLabel>
                            <Select disabled={cities?.length === 0} value={city} fullWidth onChange={(e) => setCity(e.target.value)}>
                                {cities?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store id</InputLabel>
                            <Select value={storeId} fullWidth onChange={(e) => setStoreId(e.target.value)}>
                                {[ 'REF1', 'REF2', 'REF3', 'REF4' ]?.map((item) => (
                                    <MenuItem key={item.state} value={`XIOMI_${  city }_${ item }`}>
                                        {`XIOMI_${  city?.replace(/ {1,}/g, '_') }_${ item }`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <FormInput required name="zip" label="Zip / Postal code" />
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" to="/cart">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default Checkout;
