import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';

const Home = () => {
    const [homeServices, setHomeServices] = useState([])
    // console.log(homeServices)
    fetch(() => {

    }, [])
    fetch('http://localhost:5000/homeServices')
        .then(res => res.json())
        .then(data => setHomeServices(data))
    return (
        <div>
            <Banner></Banner>
            <div className='container mt-5 '>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        homeServices.map(service => <HomeServices key={service._id} service={service}></HomeServices>)
                    }
                </Row>
                <Button className='d-flex mx-auto btn btn-success'>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/services'>See more tour packages</Link>
                </Button>
            </div>

        </div>
    );
};

export default Home;