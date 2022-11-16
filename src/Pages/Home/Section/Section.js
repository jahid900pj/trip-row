import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const Section = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='text-center text-success mt-5'> Travel Tips</h3>
                <div className="row g-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-4">
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
                    <div className="col-12 col-md-6 col-lg-4">
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
                    <div className="col-12 col-md-6 col-lg-4  mb-5">
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


            <div className='mt-5'>

                <h3 className='text-center text-success mt-5'>   Travel inquiries</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is travel?</Accordion.Header>
                        <Accordion.Body>
                            Travel is: the movement of people from one place to another on foot, by car, by bicycle, by train, by boat or by plane.

                            You can take travel bag, luggage along with you or not. Again, resting somewhere for some time or for a few days along the journey can also be called travel.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why travel?</Accordion.Header>
                        <Accordion.Body>
                            Many people ask: “Why travel?” What do I gain by traveling? Let's try to find answers to your questions.

                            Hopefully you have already traveled? Learned about it. If you don't know, check the “Common Questions” above.

                            Traveling gives us pleasure as well as helps us to get rid of boredom. Apart from giving pleasure and relieving boredom, traveling also teaches us many things. There are many things to learn in travel.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is Bangladesh safe to travel to?
                        </Accordion.Header>
                        <Accordion.Body>
                            The answer is “yes”. Those who have already traveled to Bangladesh (Bangladesh Vromon) know how safe it is to travel to Bangladesh.

                            However, those who use the pretext of terrorist attacks to say that traveling to Bangladesh is not safe! Telling them, you won't find any country in the world that is safe from terrorist attacks.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Section;