import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import modalAction from 'redux/actions/modal.action';
import styles from './Header.style';

const useStyles = makeStyles(styles);
export default function Header({ signIn = () => {} }) {
    const classes = useStyles();
    const [ isNavVisible, setNavVisibility ] = useState(false);
    const products = useSelector((state) => state.checkout.itemInCart);
    const [ cookies, setCookie, removeCookie ] = useCookies([ 'user' ]);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };
    const  reduxDispatch  = useDispatch();
    const handleSigninModal = (type) => {
        reduxDispatch(modalAction.setModalObj({
            data: {

            },
            type, // SIGNIN SINGUP
            open: true,
        }));
    };
    const logOut = () => {
        removeCookie('user');
    };
    return (
        <>
            <nav id="navbar" className="">
                <div className="nav-wrapper">

                    <div className="logo">

                        <a href="/"><i className="fa fa-angellist" /> xiaomi</a>
                    </div>

                    <ul id="menu">
                        <li><a href="/">Home</a></li>

                        {cookies?.user ? (<li style={{ color: 'red' }}><a href="#" onClick={() => logOut()}>Logout</a></li>) : (<li><a href="#" onClick={() => handleSigninModal('SIGNIN')}>Login</a></li>)}
                        {products?.length ? (
                            <li style={{ marginLeft: '40px', cursor: 'pointer' }} onClick={() => handleSigninModal('CART')}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </li>
                        ) : <></>}
                    </ul>
                </div>
            </nav>

            <div className="menuIcon">
                <span className="icon icon-bars" />
                <span className="icon icon-bars overlay" />
            </div>

            <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </>
    );
}
