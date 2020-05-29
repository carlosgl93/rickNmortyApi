import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// base URL of the Rick & Morty REST API 
const apiUrl = "https://rickandmortyapi.com/api";


// class component to fetch and display R&M characters in
// Bootstrap card components
class CharCard extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }
    // get all the characters of the show:
    getAllChars = async () => {
        const resp = await fetch(`${apiUrl}/character`).catch((e) => { console.log("error getting Characters:", e) });
        //validacion de la respuesta
        if (resp === undefined) {
            return "Response undefined, what the hell?";
        }
        const response = await resp.json();

        this.setState({ characters: response.results });
        console.log(this.state.characters[0]);

    }




    // render info got from the API
    async componentDidMount() {
        await this.getAllChars();

    }

    render() {
        return (
            <Container>
                <Row >
                     {this.state.characters.map((item, index) => {
                     return (

                        <Col xl={4} lg={4} md={4} sm={6}>
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>

                                <ul>
                                    <li>{item.gender}</li>
                                    <li>{item.status}</li>
                                    <li>{item.species}</li>
                                    <li>{item.type}</li>
                                </ul>

                                <Button variant="primary">See episode featuring {item.name}</Button>
                            </Card.Body>
                        </Card>
                    </Col>

            );
       })
    }

                </Row>
            </Container>
        )
}
}
export default CharCard;