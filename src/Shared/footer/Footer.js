import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='bg-success p-5 mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <span className="footer-title">Service</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">All Trips</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Blog</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-4 footer-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <span className="footer-title">Company</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Job postings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">News and articles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <span className="footer-title">Contact & Support</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link  text-light"><i className="fas fa-phone"></i>+47 45 80 80 80</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#"><i className="fas fa-comments"></i>Live chat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#"><i className="fas fa-envelope"></i>Contact us</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>


                </div>
            </footer>
        </div>
    );
};

export default Footer;