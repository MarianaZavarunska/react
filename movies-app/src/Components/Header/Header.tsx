
import { FC } from 'react';

import Form from '../Form/Form';
import './Header.css';


const Header:FC = () => {
    return (
        <div className='header'>
            <div className='logo'>
            <img src={require('./logo-movie_preview_rev_1.jpeg')}  alt='logo'/>
            </div>
            <Form/>
        <div className='sign-btn'>Sign In</div>
        </div>
    );
};

export default Header;