import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    // console.log(myReviews)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://server-side-assigment-11.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                // setRefresh(!false)
            })
    }, [user?.email, refresh])

    return (
        <div style={{ marginBottom: '300px' }} className='container '>
            {
                myReviews.length === 0 ? <>
                    <h1 className='mb-5'>No reviews</h1>
                </> :
                    <Table striped bordered hover className='mb-5'>
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
            fetch(`https://server-side-assigment-11.vercel.app/reviews/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setRefresh(!refresh)
                        toast.success('Deleted successfully')
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