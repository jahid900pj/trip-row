import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const Section = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='text-center text-success mt-5'> Travel Tips</h3>
                <div class="row g-4 ">
                    <div class="col-12 col-md-6 col-lg-4">
                        <Card border="success" >
                            <Card.Header>Tips</Card.Header>
                            <Card.Body>
                                <Card.Title>What to do if vomiting is a problem
                                </Card.Title>
                                <Card.Text>
                                    Sleeping on the bus does not cause vomiting on the journey

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <Card border="success" >
                            <Card.Header>Tips</Card.Header>
                            <Card.Body>
                                <Card.Title>Orientation without a compass
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <Card border="success" >
                            <Card.Header>Tips</Card.Header>
                            <Card.Body>
                                <Card.Title>Tips for solo travel
                                </Card.Title>
                                <Card.Text>
                                    Or to ensure your safety.Avoid going to distant places at night

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;