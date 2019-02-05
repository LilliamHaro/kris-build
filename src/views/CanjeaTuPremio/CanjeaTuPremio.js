import React, { Component } from 'react';
import './CanjeaTuPremio.css'
import titleCanjeaTuPremio from '../../assets/titulo-canjea-tu-premio.png'
import canjeaTuPremio from '../../assets/canjea-premio.png'

class CanjeaTuPremio extends Component {
    render() {
        return (
            <div className="canjeaTuPremio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flex-box">
                                <div className="flex-box">
                                    <h2>
                                        <img src={titleCanjeaTuPremio} alt="título canje tu premio" />
                                    </h2>
                                    <div className="main-image">
                                        <img src={canjeaTuPremio} alt="canje tu premio" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CanjeaTuPremio;