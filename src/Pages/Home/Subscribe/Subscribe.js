import React from 'react';
import './Subscribe.css'

// https://codepen.io/baahubali92/pen/ZwPwRY

const Subscribe = () => {
    return (
        <div class="newsletter">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-7">
                        <div class="section-title text-center">
                            <h2>Our Newslatter</h2>
                            <p>We bring the right people together to challenge established thinking and drive transformation.
                                We will show the way to successive.</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-7">
                        <form class="newsletter-form">
                            <input type="email" placeholder="Enter your email..." required />
                            <button type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;