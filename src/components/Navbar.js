import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import Nav from "react-bootstrap/Nav";

class Navbar extends Component {

    render() {
        return (
            <div>
                <Link to="/"> LOGO HOME</Link>
                <Link to="/characters">Characters</Link>
            </div>
            );
    }



}

export default Navbar;