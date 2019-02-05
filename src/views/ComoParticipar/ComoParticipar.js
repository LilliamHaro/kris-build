import React, { Component } from 'react';
import './ComoParticipar.css'
import titleComoParticipar from '../../assets/titulo-como-participar.png'
import comoParticipar from '../../assets/como-participar.png'

class ComoParticipar extends Component {
    render() {
        return (
            <div className="comoParticipar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flex-box">
                                <h2>
                                    <img src={titleComoParticipar} alt="título como participar"/>
                                </h2>
                                <div className="main-image">
                                    <img src={comoParticipar} alt="como participar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComoParticipar;