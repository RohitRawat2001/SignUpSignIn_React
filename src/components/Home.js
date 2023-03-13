import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const [InpVal, setInpVal] = useState({

        name: "",
        email: "",
        password: "",
    })


    const [data, setdata] = useState([]);
    console.log(InpVal);



    const getdata = (e) => {
        //console.log(e.target.value);

        const { value, name } = e.target;
        //console.log(value,name);

        setInpVal(() => {
            return {
                ...InpVal,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = InpVal;

        if (name === "") {
            alert("name field is required");
        }
        else if (email === "") {
            alert("email field is required");
        }
        else if (!email.includes("@")) {
            alert("Plz enter valid email address");
        }
        else if (password === "") {
            alert("password field is required");
        }
        else if (password.length < 5) {
            alert("Plz enter strong password greater than 5 digits");
        }
        else {
            console.log("Data Added Successfully")

            localStorage.setItem("userrohit", JSON.stringify([...data, InpVal]));
        }
    }
    return (
        <>
            <div className="container mt-5">
                <section className='d-flex justify-content-between'>
                    <div className="left-section col-lg-4 p-3" >
                        <h1 className='text-center'>Sign Up</h1>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Name" className="mb-3">
                            <Form.Control type="text" name='name' onChange={getdata} placeholder="name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                        </FloatingLabel>

                        <Button className='col-lg-6' onClick={addData} variant="outline-warning mt-3">Submit</Button>{' '}
                        <p className='mt-3'>
                            Already have an account? <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <SignImg />

                </section>
            </div>

        </>
    )
}

export default Home