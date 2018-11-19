import React, { Component } from 'react';
import Aux from '../hoc/myAux/Aux';
import myImg from '../Images/sampleMockUp.png';
import playStore from '../Images/google-play-badge.png';
import appStore from '../Images/ios-badge.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class Section extends Component {
    render() {
        return (
            <Aux>
                <div className="container">

                    <div className="row">

                        <Slide bottom>
                            <div className="col-md-7">
                                <img src={myImg} style={{ maxWidth: "100%" }} className="rounded img-fluid" alt="..." />
                            </div>
                        </Slide>

                        <div className="col-md-5" style={{ overflow: 'hidden' }}>

                            <Slide right>
                                <div className="row text-center" style={{ padding: '15px' }}>
                                    <div className="col-md-2">
                                        <p><i className="fas fa-shield-alt" style={{ fontSize: '50px', color: 'black' }}></i></p>
                                    </div>
                                    <div className="col-md-10">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur, deserunt dolore libero doloribus dolores vitae</p>
                                    </div>
                                </div>
                            </Slide>

                            <Slide right>
                                <div className="row text-center" style={{ padding: '15px' }}>
                                    <div className="col-md-2">
                                        <p><i className="fas fa-mobile-alt" style={{ fontSize: '50px', color: 'black' }}></i></p>
                                    </div>
                                    <div className="col-md-10">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur, deserunt dolore libero doloribus dolores vitae</p>
                                    </div>
                                </div>
                            </Slide>

                            <div className="text-center" >
                                <Fade>
                                    <a href="https://play.google.com/store"><img src={playStore} alt="" style={{ width: '150px' }} /></a>
                                </Fade>
                                <Fade>
                                    <a href="https://www.apple.com/ph/ios/app-store/"><img src={appStore} alt="" style={{ width: '123px' }} /></a>
                                </Fade>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </Aux>
        );
    }
}
export default Section;