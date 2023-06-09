import React from 'react';

const Blogs = () => {

    const style1 = {
        enableBackground: 'new 0 0 100 100',
    };
    return (
        <div className='container '>
            <div>
                <h1 style={{ marginTop: "7rem" }} className='fs-1 text-center  mb-5'>FEATURED BLOG <span className='text-success fw-bold '>POSTS</span></h1>
            </div>
            <section class="row  mb-5 g-3  justify-content-between ">

                <div class="card col-12 col-md-6 col-lg-4" style={{ width: '22rem' }}>
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">PRE-TRIP READING & TRAVEL PLANS FOR AMAZON, BRAZIL</h5>
                        <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni..</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button className='btn btn-success btn-sm rounded-full'>Read More...</button>
                    </div>
                </div>
                <div class="card col-12 col-md-6 col-lg-4" style={{ width: '22rem' }}>
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">GUIDED HIKES IN ICELAND – RHYOLITE MOUNTAIN TRAIL</h5>
                        <p class="card-text">Neque porro quisquam est,  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <button className='btn btn-success btn-sm rounded-full'>Read More...</button>
                    </div>
                </div>
                <div class="card col-12 col-md-6 col-lg-4" style={{ width: '22rem' }}>
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">THE ULTIMATE GRAND CANYON TRAVEL GUIDE FOR ALPINISTS</h5>
                        <p class="card-text"> incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam, uis nostrud exerc itation ullamco. Laboris nisi. ut aliquip ex ea commodo ... </p>
                        <button className='btn btn-success btn-sm rounded-full'>Read More...</button>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Blogs;