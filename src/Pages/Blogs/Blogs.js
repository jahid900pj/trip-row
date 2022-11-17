import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h4>1. Difference between SQL and NoSQL ?</h4>
                <p>Ans : SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>

            <br />
            <div>
                <h4>2. What is JWT, and how does it work?</h4>
                <p>Ans : What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
            <br />
            <div>
                <h4>3. What is the difference between javascript and NodeJS?</h4>
                <p>Ans : JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>

            <br />
            <div>
                <h4>4. How does NodeJS handle multiple requests at the same time?</h4>
                <p>Ans : How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>

        </div>
    );
};

export default Blogs;