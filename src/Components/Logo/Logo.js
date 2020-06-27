import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='center'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa2"><img style={{paddingTop: '5px'}} alt='logo' src={brain}/></div>
            </Tilt>
        </div>

    );
}

export default Logo