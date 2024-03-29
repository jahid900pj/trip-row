import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import Section from '../Section/Section';
import Blogs from '../Blogs/Blogs';
import Testimonial from '../Testimonia/Testimonial';
import Subscribe from '../Subscribe/Subscribe';
import Gallery from '../Gallery/Gallery';
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import ContactUs from '../ContactUs/ContactUs';

// https://codepen.io/pbruny/pen/XWXObeM


const Home = () => {
    const [homeServices, setHomeServices] = useState([])
    // console.log(homeServices)
    fetch(() => {

    }, [])
    fetch('https://server-side-assigment-11.vercel.app/homeServices')
        .then(res => res.json())
        .then(data => setHomeServices(data))
    return (
        <div className=''>
            <Banner></Banner>
            <div className='container'>
                <div className='container mt-5 mb-5'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            homeServices.map(service => <HomeServices key={service._id} service={service}></HomeServices>)
                        }
                    </Row>
                    <Button className='d-flex mx-auto btn btn-success'>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/services'>See more tour packages</Link>
                    </Button>
                </div>
                <ServiceProvide></ServiceProvide>

                <Gallery></Gallery>
                <Testimonial></Testimonial>
                <Section></Section>
                <Blogs></Blogs>
                <ContactUs></ContactUs>

            </div>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;