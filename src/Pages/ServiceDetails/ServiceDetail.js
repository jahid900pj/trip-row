import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AddReview from '../AddReview/AddReview';

const ServiceDetail = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)

    // console.log(service)
    const { description, img, price, title, _id } = service;


    return (
        <div className='container'>
            {/* <h1>{coursesDetails.courses_name
        }</h1> */}
            <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded border-0" >
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

                            <Button variant="success" className='mt-3'>
                                Get Package
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />

            <AddReview key={_id} data={service}></AddReview>





        </div>
    );
};

export default ServiceDetail;