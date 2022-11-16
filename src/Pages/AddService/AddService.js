import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddService = () => {

    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(title, img, price, description)

        const service = {
            title, img, price, description
        }

        fetch(`http://localhost:5000/addService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order place successfully')
                    form.reset()
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container'>
            <Form onSubmit={handleAddService}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Trip Name</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Trip Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>ImageURL</Form.Label>
                        <Form.Control type="text" placeholder="ImageURL" name='img' required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" name='price' required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" name='description' required />
                    </Form.Group>
                </Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;