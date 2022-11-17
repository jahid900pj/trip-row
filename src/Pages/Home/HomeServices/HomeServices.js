import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const HomeServices = ({ service }) => {
    const { title, description, img, price, _id } = service;
    // console.log(_id)
    return (
        <Col>
            <Card className='shadow-lg p-3 mb-5 bg-body rounded border-0'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body className='ps-0'>
                    <Card.Title>{title}</Card.Title>
                    <h6>price : {price} <small className='text-secondary'>tk</small></h6>
                    <Card.Text>
                        {
                            description.slice(0, 100) + '...'
                        }
                    </Card.Text>
                    <Button className=' btn btn-success'>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/service/${_id}`}>More Info .. </Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col >

    );
};

export default HomeServices;