import React from 'react';
import './Testimonial.css'

const Testimonial = () => {

    return (
        <div class="container " style={{ marginTop: '10rem', marginBottom: '8rem' }}>
            <div>
                <h3 className='fs-3 text-center'>Our clients & guest
                </h3>
                <h1 className='fs-1 text-success text-center'>Testimonials</h1>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card p-3 text-center px-4">

                        <div class="user-image">

                            <img src="https://i.imgur.com/PKHvlRS.jpg" class="rounded-circle" width="80"
                            />

                        </div>

                        <div class="user-content">

                            <h5 class="mb-0">Bruce Hardy</h5>
                            <span>Software Developer</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>

                        <div class="ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>

                        </div>

                    </div>
                </div>

                <div class="col-md-4">

                    <div class="card p-3 text-center px-4">

                        <div class="user-image">

                            <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="80"
                            />

                        </div>

                        <div class="user-content">

                            <h5 class="mb-0">Mark Smith</h5>
                            <span>Web Developer</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>

                        <div class="ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>

                        </div>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card p-3 text-center px-4">

                        <div class="user-image">

                            <img src="https://i.imgur.com/ACeArwY.jpg" class="rounded-circle" width="80"
                            />

                        </div>

                        <div class="user-content">

                            <h5 class="mb-0">Veera  Duncan</h5>
                            <span>Software Architect</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>

                        <div class="ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Testimonial;