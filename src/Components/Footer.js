import React from 'react';
import Aux from '../hoc/myAux/Aux';

const Footer = () => (
    <Aux>
        <footer className="text-center container" >
            <hr/>
            <p>Lester De Guzman &copy; 2018</p>
            <p>Contact information: <a href="mailto:someone@example.com">
                lester.deguzman@tup.edu.ph</a>.</p>
        </footer>
    </Aux>
);

export default Footer;