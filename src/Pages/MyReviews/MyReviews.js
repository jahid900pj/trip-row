import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    // console.log(myReviews)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                // setRefresh(!false)
            })
    }, [user?.email, refresh])

    return (
        <div className='container'>
            {
                myReviews.length === 0 ? <>
                    <h1>No reviews</h1>
                </> :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Package Name</th>
                                <th>Price</th>
                                <th>comment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myReviews.map(review => <MyReview
                                    key={review._id}
                                    review={review}
                                    refresh={refresh}
                                    setRefresh={setRefresh}
                                ></MyReview>)
                            }
                        </tbody>
                    </Table>}

        </div>
    );
};

const MyReview = ({ review, refresh, setRefresh }) => {
    console.log(review)
    const { massage, title, price, _id } = review;

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete this order')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setRefresh(!refresh)
                    }

                })
        }
    }

    return (
        <tr>
            <td onClick={() => handleDelete(_id)}>x</td>
            <td>{title}</td>
            <td>{price} <small>tk</small></td>
            <td>{massage}</td>
        </tr>
    )
}

export default MyReviews;