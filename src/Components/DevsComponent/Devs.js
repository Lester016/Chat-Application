import React from 'react'
import Aux from '../../hoc/myAux/Aux';
import './Devs.css';
import dev1 from '../../Images/chrollo.jpg';
import Fade from 'react-reveal/Fade';
// import dev2 from '../../Images/hisoka.jpg';
// import dev3 from '../../Images/illumi.jpg';
// import dev4 from '../../Images/kaido.jpg';
// import dev5 from '../../Images/meruemkomugi.jpg';
// import dev6 from '../../Images/shanks.jpg';


const Devs = () => {
    return (
        <Aux>
            <h1 className="text-center">Meet my team</h1>
            <Fade>
                <div className="row center align-items-center justify-content-center text-center" style={{ margin: "30px" }}>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>Project Manager</h3>
                    </div>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>Back-end</h3>
                    </div>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>SEO</h3>
                    </div>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>Designer</h3>
                    </div>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>Security</h3>
                    </div>
                    <div className="myContainer col-sm-3">
                        <img src={dev1} alt="Developer" class="image" />
                        <div className="overlay">
                            <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <h3>Front-End</h3>
                    </div>
                </div>
            </Fade>
        </Aux>
    )
}

export default Devs;