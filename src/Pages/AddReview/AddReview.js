import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Card from 'react-bootstrap/Card';
import ReviewDetails from '../ReviewDetils/ReviewDetails'


const AddReview = ({ data }) => {
    const [reviews, setReviews] = useState([])
    const { description, img, price, title, _id } = data;
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user || {}



    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    // console.log(review)

    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const massage = form.massage.value;
        const review = {
            serviceId: _id,
            massage, displayName, email, photoURL

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                }
            })
            .catch(error => console.log(error))

    }



    return (
        <div className='container'>
            <h3>Reviews</h3>
            <div>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleReview}>
                                <InputGroup style={{ maxWidth: '500px' }} className="mb-3 w-100">
                                    <Form.Control
                                        name='massage'
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button type='submit' variant="outline-success" id="button-addon2">
                                        Add Review
                                    </Button>
                                </InputGroup>

                            </form>
                        </> : <><h2>Place login to add review</h2></>
                }
            </div>

            <div>
                <Card className='w-100' style={{ maxWidth: '25rem' }}>
                    {
                        reviews.map(review => <ReviewDetails></ReviewDetails>)
                    }
                </Card>
            </div>
        </div>
    );
};

export default AddReview;