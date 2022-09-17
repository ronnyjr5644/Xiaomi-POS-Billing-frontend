import Button from '@components/Button/Button';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import modalAction from 'redux/actions/modal.action';
import styles from './Header.style';

const useStyles = makeStyles(styles);
export default function Header({ signIn = () => {} }) {
    const classes = useStyles();
    const [ isNavVisible, setNavVisibility ] = useState(false);
    const [ isSmallScreen, setIsSmallScreen ] = useState(false);
    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

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

    return (
        <header className="Header">
            <div className={classes.headerLogo}>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png"
                    height={30}
                    width={30}
                    alt="logo"
                />
                {/* <Image
                    src={blocks?.logo?.image?.url || creatigoLogo1?.src || ''}
                    alt="Creatigo Logo"
                /> */}
            </div>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link href="/">Home</Link>
                    <Link href="/">Articles</Link>
                    <Button style={{ height: '40px' }} onClick={() => handleSigninModal('CART')}>Cart</Button>

                    <Button style={{ height: '40px' }} onClick={() => handleSigninModal('SIGNIN')}>Login</Button>

                </nav>
            </CSSTransition>
            <Button onClick={() => signIn()} className="Burger">
                🍔
            </Button>

        </header>
    );
}
