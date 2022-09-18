import {
    Button, Grid, InputLabel, MenuItem, Select, Typography
} from '@mui/material';
import { STATE } from 'assets/currentStore';
import useCustomAxiosCall from 'hooks/customAxiosHook';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './CustomTextField';

const Checkout = () => {
    const [ shippingState, setShippingState ] = useState('');
    const [ cities, setCities ] = useState();
    const [ city, setCity ] = useState('');
    const [ checkoutData, setCheckoutData ] = useState({});
    const methods = useForm();
    const { callApi }  = useCustomAxiosCall();
    const handleSendMail = async () => {
        const response = await callApi({
            uriEndPoint: {
                uri: '/api/mailer',
                method: 'POST',
            },
            body: {
                ...checkoutData,
            },

        });
        console.log('=> ', response);
    };
    const fetchCities = async (state) => {
        STATE.map((item) => {
            if (item.state === state) {
                setCities(item.districts);
            }
        });
    };

    useEffect(() => {
        if (checkoutData?.state) { fetchCities(checkoutData.state); }
    }, [ checkoutData?.state ]);
    return (
        <div style={{
            padding: '20px', width: '50%', margin: 'auto auto', borderRadius: '10px',   boxShadow: '5px 10px 18px red',
        }}
        >
            <Typography variant="h6" gutterBottom>Checkout Details</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => handleSendMail({
                    ...data,
                }))}
                >
                    <Grid container spacing={3}>
                        <FormInput onChange={(e) => { setCheckoutData({ ...checkoutData, firstName: e.target.value }); }} value={checkoutData.firstName} required name="firstName" label="First name" />
                        <FormInput onChange={(e) => { setCheckoutData({ ...checkoutData, lastName: e.target.value }); }} value={checkoutData.lastName} required name="lastName" label="Last name" />
                        <FormInput onChange={(e) => { setCheckoutData({ ...checkoutData, address: e.target.value }); }} value={checkoutData.address} required name="address1" label="Full Address" />
                        <FormInput onChange={(e) => { setCheckoutData({ ...checkoutData, mail: e.target.value }); }} value={checkoutData.mail} required name="email" label="Email" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store State</InputLabel>
                            <Select onChange={(e) => { setCheckoutData({ ...checkoutData, state: e.target.value }); }} value={checkoutData.state} fullWidth>
                                {STATE.map((item) => (
                                    <MenuItem key={item.state} value={item.state}>
                                        {item.state}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store City</InputLabel>
                            <Select disabled={checkoutData?.city?.length === 0} fullWidth onChange={(e) => { setCheckoutData({ ...checkoutData, city: e.target.value }); }} value={checkoutData.city}>
                                {cities?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Store id</InputLabel>
                            <Select fullWidth onChange={(e) => { setCheckoutData({ ...checkoutData, store: e.target.value }); }} value={checkoutData.store}>
                                {[ 'REF1', 'REF2', 'REF3', 'REF4' ]?.map((item) => (
                                    <MenuItem key={item.state} value={`XIOMI_${  checkoutData.city }_${ item }`}>
                                        {`XIOMI_${  checkoutData.city?.replace(/ {1,}/g, '_') }_${ item }`}
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
        </div>
    );
};

export default Checkout;
