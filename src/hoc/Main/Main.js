import React, { Component } from 'react';
import Aux from '../myAux/Aux';
import Home from '../HomeContainer/HomeContainer';
import Nav from '../../Components/Nav';
import Chat from '../../hoc/ChatContainer/ChatContainer';
import { Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Aux>
                <Nav />
                {/* The exact property makes the only path render without including the rest of the path under it */}
                <Route path="/" exact component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/chat"  component={Chat} />
            </Aux>
        )
    }
}

export default Main;