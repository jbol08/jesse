import React from 'react';
import img from './pics/beast.jpg';

function header() {
    return (
        <header>
            <img src={img} alt='logo'></img>
        </header>
    );
}

export default header;