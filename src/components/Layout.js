import React from "react";
import Flux from "react-flux-dash";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CharCard from "./CharCard";
import LocCard from "./LocCard";

export default class Layout extends Flux.view {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/characters" component={CharCard} />
                            <Route exact path="/locations" component={LocCard} />
                            <Route render={() => <h1>Not Found!</h1>}/>

                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        )
    }}
    