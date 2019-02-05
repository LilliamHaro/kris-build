import React, { Component } from 'react';
import './Main.css';
import { Switch, Route } from "react-router-dom";
import Home from '../../views/Home/Home'
import IngresaTuCodigo from '../../views/IngresaTuCodigo/IngresaTuCodigo'
import ComoParticipar from '../../views/ComoParticipar/ComoParticipar';
import CanjeaTuPremio from '../../views/CanjeaTuPremio/CanjeaTuPremio';



class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ingresatucodigo" component={IngresaTuCodigo} />
                    <Route exact path="/comoparticipar" component={ComoParticipar} />
                    <Route exact path="/canjeatupremio" component={CanjeaTuPremio} />   
                    <Route exact path="/*" component={Home} />                   
                </Switch>
            </main>
        )
    }
}

export default Main;