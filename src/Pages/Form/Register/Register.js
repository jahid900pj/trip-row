import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import SocialAccount from '../../SocialAccount/SocialAccount';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    })

    const [errors, setErrors] = useState({
        email: '', password: '', general: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        // console.log(name, photoURL, userInfo.email, userInfo.password)

        createUser(userInfo.email, userInfo.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                setErrors('')
                // navigate(location?.state?.from?.pathname)

            })
            .catch((error) => {
                console.error('new user ', error)
                setErrors({ ...errors, general: error.message })
            })
    }

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        const email = e.target.value;
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setErrors({ ...errors, email: 'Place provide a valid email' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }
        else {
            setErrors({ ...errors, email: '' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }

    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, password: 'Password must be 6 characters' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }
        else {
            setErrors({ ...errors, password: '' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='container'>
            <div>
                <Form onSubmit={handleSubmit} style={{ maxWidth: '400px', background: '#adb5bd', boxShadow: '10px 10px 50px 5px #adb5bd' }} className='w-100 mx-auto ps-3 pe-3 pb-5 pt-4 rounded '>
                    <h1 className='text-center'>Sign Up</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" name='email' placeholder="Enter email"
                            required />
                        <Form.Text className="text-danger">
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" name='password' placeholder="Password"
                            required />
                        <Form.Text className="text-danger">
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>
                    <Form.Text className="text-danger">
                        {errors.general && <p className="text-danger">{errors.general}</p>}
                    </Form.Text>
                    <Button className='mb-3' variant="primary" type="submit" >
                        Register
                    </Button>
                    <p className='text-center hr-line'> <span>Login with social accounts</span> </p>
                    <SocialAccount></SocialAccount>
                    <p className='text-center'>Already have an account?
                        <Link to='/login'> Sign in</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;