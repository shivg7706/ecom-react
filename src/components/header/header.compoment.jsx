import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='shop' to='/shop'>SHOP</Link>
            <Link className='contact' to='/contact'>CONTACT</Link>
        </div>
    </div>
);

export default Header;