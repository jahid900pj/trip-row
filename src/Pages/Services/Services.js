import React, { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import HomeServices from '../Home/HomeServices/HomeServices';

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(homeServices)

    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    return (
        <div>

            <div className='container mt-5'>
                <h2 className='text-success'>All services</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <HomeServices key={service._id} service={service}></HomeServices>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;