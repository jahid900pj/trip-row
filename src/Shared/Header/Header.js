import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import './Header.css'
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { logout, user } = useContext(AuthContext)

    const handleSignOut = () => {
        logout()
            .then(() => {

            })
            .catch(() => {

            })
    }
    return (


        <Navbar className='shadow-lg p-3 mb-5 bg-body' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className=' fw-bolder text-success' href="#home">
                    Trip row
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto h-link">
                        <Link to='/'>Home</Link>
                        <Link to='/services'>All Trips</Link>
                        <Link to='/MyReviews'>My Reviews</Link>
                        <Link to='/blog'>Blog</Link>

                    </Nav>

                    <Nav className='h-link me-4'>
                        {
                            user?.uid ? <>


                                <Button variant="outline-success" onClick={handleSignOut}>Logout</Button>
                            </> :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                    </Nav>

                    {
                        user && <Nav className='h-link'>
                            {
                                user?.photoURL ? <img style={{ height: '40px', borderRadius: '100%', width: '40px' }} src={user?.photoURL} alt='' title={user.displayName} /> : <FaUser></FaUser>
                            }
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )



};

export default Header;