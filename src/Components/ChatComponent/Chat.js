import React, { Component } from 'react';
import Aux from '../../hoc/myAux/Aux';
import './Chat.css';
import axios from 'axios';

class Chat extends Component {
    state = {
        messages: ''
    }

    handleMessage = (event) => {
        this.setState({ messages: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            text: this.state.messages
        }
        this.setState({messages: ''});
        axios.post('https://landian-react.firebaseio.com/messages.json', data)
            .then(res => console.log(res));
        
    }

    render() {
        return (
            <Aux>
                <div className="Message" >
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Type your message." value={this.state.messages} className="MessageInput" onChange={this.handleMessage} autofocus />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </Aux>
        );
    }
}
export default Chat;