import React from 'react';
import Aux from '../hoc/myAux/Aux';
import Fade from 'react-reveal/Fade';


const Jumbotron = () => (
    <Aux>
        <div className="jumbotron text-center">
            <Fade>
                <h1 className="display-4">Landian</h1>
                <p className="lead">Landian is a chat application made by <b>Lester De Guzman</b>, Landian is a great way to meet new friends. When you use Landian, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Landian, so please be careful.</p>
            </Fade>

            <hr className="my-4"></hr>
            <Fade>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href='/chat' role="button">TRY LANDIAN</a>
                </p>
            </Fade>

        </div>
    </Aux>
);

export default Jumbotron;