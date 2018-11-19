import React, { Component } from 'react';
import Aux from '../myAux/Aux';
import Chat from '../../Components/ChatComponent/Chat';
import firebase from 'firebase';
import unknown from '../../Images/unknownprofile.gif';
import './ChatContainer.css';


class ChatContainer extends Component {
    state = {
        outputMessage: []
    }

    componentDidMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBo6N1xwzJCRUW0N8qio3NpYuyqjiymXz0",
            authDomain: "landian-react.firebaseapp.com",
            databaseURL: "https://landian-react.firebaseio.com",
            projectId: "landian-react",
            storageBucket: "landian-react.appspot.com",
            messagingSenderId: "189762071372"
        };
        firebase.initializeApp(config);
        this.getMessage()
    }

    getMessage = () => {
        let messagesDB = firebase.database().ref('/messages');
        messagesDB.on("value", snapshopt => {
            let newMessages = []
            snapshopt.forEach(child => {
                var message = child.val()
                newMessages.push({ id: child.key, text: message.text })
            })
            this.setState({ outputMessage: newMessages });
            this.bottomSpan.scrollIntoView({ behavior: "smooth" })
        })
    }
    render() {

        return (
            <Aux>
                <div style={{ height: '80%', margin: 'auto', marginTop: '50px', marginBottom: '150px' }}>
                    {this.state.outputMessage.map((message) =>
                        <ul className='headLists'>
                            <li className="MessageLists" data-toggle="tooltip" data-placement="right" title={Date()} data-original-title="Tooltip on right">
                                <img src={unknown} alt="" style={{ width: '30px', borderRadius: '30px', marginRight: '30px' }} />
                                {message.text}
                            </li>
                        </ul>)}
                    <span ref={el => (this.bottomSpan = el)} />
                    <Chat />
                </div>

            </Aux>
        )
    }
}

export default ChatContainer;