/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@components/Button/Button';
import Dialog from '@components/Dialog/Dialog';
import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import { Divider, Grid, Typography } from '@mui/material';
import { inventory } from 'assets/currentStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutActions from 'redux/actions/checkout.action';
import modalAction from 'redux/actions/modal.action';
import SignInForm from 'src/layouts/AuthForms/SignInForm/SignInForm';
import SignUpForm from 'src/layouts/AuthForms/SignInForm/SignUpForm';

const HomepageView = () => {
    const  reduxDispatch  = useDispatch();
    const products = useSelector((state) => state.checkout.itemInCart);
    const getEllipsisTxt = (str, n = 6) => {
        if (str.length > n) {
            return `${ str.slice(0, n) }...`;
        }
        return str;
    };
    const router = useRouter();
    const handleSigninModal = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: 'SIGNIN', // SIGNIN SINGUP
            open: true,
        }));
    };
    const handleSignUpModal = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: 'SINGUP', // SIGNIN SINGUP
            open: true,
        }));
    };
    const handleClose = () => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type: '', // SIGNIN SINGUP
            open: false,
        }));
    };
    const convertNumber = (price = '') => price?.replace(/₹{1,}/g, '').replace(/,{1,}/g, '');
    const handleAddProduct = (product) => {
        reduxDispatch(CheckoutActions.addItem(product));
    };
    const handleRemoveProduct = (product) => {
        reduxDispatch(CheckoutActions.removeItem(product));
    };
    const { modal } = useSelector((state) => state.modal);
    const renderCart = () => {
        if (products.length <= 0) {
            return <Typography>No Item Available</Typography>;
        }
        let total = 0;

        const productsList  = products.map((item) => {
            total = Number(convertNumber(item.price)) + total;
            return (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography key={item}>✴ {getEllipsisTxt(item.name, 15)}</Typography>
                        <Typography key={item}>=&gt; {convertNumber(item.price) }&nbsp;INR</Typography>

                    </div>

                </>

            );
        });
        return (
            <>
                { productsList }
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>=&gt; Total</Typography>
                    <Typography>=&gt; {total }&nbsp;INR</Typography>

                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>

                    <Button onClick={() => router.push('/checkout')}>CHECKOUT</Button>
                </div>
            </>
        );
    };
    return (
        <div style={{ margin: 'auto 20px', height: '100vh' }}>
            <DocumentHeader
                title="Xiomi Billing - Landing Page"
                description=""
            />
            <div style={{ marginTop: '8%' }}>
                {
                    inventory.data.base_data[ 0 ].children.map((item) => (
                        <>
                            <div style={{
                                background: '#dac400', borderRadius: '0px 30px 0px 0px', padding: '10px', marginLeft: '-25px', width: '40%',
                            }}
                            >

                                <Typography style={{ color: '#fff', fontWeight: '600', marginLeft: '10px' }}>{item.name}</Typography>
                                <div className="badge">{item.name}</div>
                            </div>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {
                                    item.children.map((product) => {
                                        if (product.title !== 'View More') {
                                            return (
                                                <Grid item xs={2} sm={4} md={3} key={product}>
                                                    {/* <ImgMediaCard title={product.name} price={product.price} image={product.pic} /> */}

                                                    <div className="product-card">
                                                        <div className="badge">Hot</div>
                                                        <div className="product-tumb">
                                                            <Image
                                                                src={product.pic.startsWith('https://') ? product.pic : `https:${ product.pic }`}
                                                                alt=""
                                                                width={200}
                                                                height={200}
                                                            />
                                                        </div>
                                                        <div className="product-details">
                                                            <span className="product-catagory">{item.name}</span>
                                                            <h4>
                                                                <Link href="#">{getEllipsisTxt(product.name, 20)}</Link>
                                                            </h4>
                                                            <div className="product-bottom-details">
                                                                <div className="product-price"><small>{product.price}</small>{product.price}</div>
                                                                <div className="product-links">
                                                                    {
                                                                        products?.some((pro) => pro.id === product.id) ? (<Button style={{ backgroundColor: 'red' }} onClick={() => handleRemoveProduct(product)}>Already added</Button>) : (<Button onClick={() => handleAddProduct(product)}>Add To Cart</Button>)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Grid>
                                            );
                                        }

                                        return <></>;
                                    })
                                }
                            </Grid>
                        </>
                    ))
                }

            </div>
            <Dialog
                title=""
                open={modal?.open}
                handleClose={() => handleClose()}
                maxWidth="xs"
            >
                {modal.type === 'SIGNIN' && (<SignInForm handleSignUp={handleSignUpModal} />)}
                {modal.type === 'CART' && renderCart()}
                {modal.type === 'SINGUP' && (<SignUpForm handleSignIn={handleSigninModal} />)}
            </Dialog>
        </div>
    );
};

export default HomepageView;
