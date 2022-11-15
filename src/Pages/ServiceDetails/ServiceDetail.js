import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData()
    console.log(service)
    const { description, img, price, title } = service;
    return (
        <div className='container'>
            {/* <h1>{coursesDetails.courses_name
        }</h1> */}
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{title}</h3>
                            <h4 className="card-text mt-4 mb-4">{price} <small>taka</small> </h4>
                            <p className="card-text">{description}</p>
                            <p>Total enroll : 488</p>

                            {/* <Button variant="primary">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/premium/${_id}`} >Premium Access</Link>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;