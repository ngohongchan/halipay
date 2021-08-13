import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <footer>
            <Link to='/'>Hello</Link>
        </footer>
    );
};

export default Footer;
