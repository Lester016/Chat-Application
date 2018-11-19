import React, { Component } from 'react';
import Aux from '../myAux/Aux';
import Jumbotron from '../../Components/Jumbotron';
import Section from '../../Components/Section';
import Footer from '../../Components/Footer';

class Home extends Component {

    render() {
        return (
            <Aux>
                <Jumbotron />
                <Section />
                <Footer />
            </Aux>
        )
    }
}

export default Home;