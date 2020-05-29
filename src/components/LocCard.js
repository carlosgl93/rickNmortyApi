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

class LocCard extends Component {
    constructor() {
        super()
        this.state = {
            locations: []
        }
    }

    getAllLocs = async () => {
        const resp = await fetch(`${apiUrl}/location`).catch((e) => { })
        //validacion de la respuesta
        if (resp === undefined) {
            return "Error getting locations from the API";
        }
        const response = await resp.json();

        this.setState({ locations: response.results });
        console.log(this.state.locations);

    }



    // render info got from the API

    async componentDidMount() {
        await this.getAllLocs();

    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.locations.map((item, index) => {
                        return (

                            <Col xl={4} lg={4} md={4} sm={2}>
                                <Card style={{ width: '18rem' }} key={index}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>

                                        <ul>
                                            <li>{item.residents.length}</li>
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
        );
    }
}

export default LocCard;