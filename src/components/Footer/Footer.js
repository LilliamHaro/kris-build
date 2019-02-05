import React, { Component } from 'react';
import ism from '../../assets/ism.png';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="flex-footer">
                                <li>
                                    <ul className="modals-footer">
                                        <li><a href="/">terminos y condiciones</a></li>
                                        <li>|</li>
                                        <li><a href="/">preguntas frecuentes</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <figure className="logo-ism">
                                        <img src={ism} alt="ism" />
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;