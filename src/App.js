import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CharCard from "./components/CharCard";
import LocCard from "./components/LocCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.js";


export default class Layout extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                 
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/characters" component={CharCard} />
                            <Route exact path="/locations" component={LocCard} />
                            <Route render={() => <h1>Not Found!</h1>}/>

                        </Switch>
                    
                    <div className="FullWrapper">
                        <Navbar />

                        <div>
                            <div className="App">
                                <h2>Characters From The Show</h2>
                                <CharCard />
                            </div>
                            <div>
                                <h2>Locations Of The Show</h2>
                                <LocCard />
                            </div>
                        </div>
                    </div>


                </BrowserRouter>

            </div>
        )
    }}
    