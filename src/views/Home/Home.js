import React, { Component } from 'react';
import imgHome from '../../assets/banner.png';
import imgHomeTexto from '../../assets/banner-texto.png';
import imgDescubre from '../../assets/descubre.png';
import imgDale from '../../assets/cta.png';
import './Home.css';

console.log(imgHome)


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7 flex-box-center">
                            <figure>
                                <img className="mg-top-30" src={imgHome} alt="img home" />
                                <figure className="banner-absolute">
                                    <img src={imgHomeTexto} alt="img banner" />
                                </figure>   
                            </figure>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 flex-box-center action">
                            <div>
                                <figure>
                                    <img src={imgDescubre} alt="descubre" />
                                </figure>
                                <div className="flex-box-center">
                                    <a className="btn-dale" href="/" >
                                        <img src={imgDale} alt="dale" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;