import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();
    
const[InpVal,setInpVal]=useState({

    email:"",
    password:"",
})


const[data,setdata] = useState([]);
console.log(InpVal);



const getdata = (e) =>{
    //console.log(e.target.value);

    const {value,name}=e.target;
    //console.log(value,name);

    setInpVal(()=>{
        return{
            ...InpVal,
            [name]:value
        }
    })
}

const addData = (e)=>{
 e.preventDefault();


 const getuserArr = localStorage.getItem("userrohit");
 console.log(getuserArr);
  
 const{email,password}= InpVal;

 
 if(email === ""){
    alert("email field is required");
 }
 else if(!email.includes("@")){
    alert("Plz enter valid email address");
 }
 else if(password === ""){
    alert("password field is required");
 }
 else if(password.length < 5){
    alert("Plz enter strong password greater than 5 digits");
 }
 else{
    
    if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
            return el.email === email && el.password === password
        });
        if (userlogin.length === 0) {
            alert("invalid details")
        } else {
            console.log("user login succesfulyy");

            localStorage.setItem("user_login",JSON.stringify(userlogin))
            history("/details")
        }
}
}
}
  return (
    <>
     <div className="container mt-5">
                <section className='d-flex justify-content-between'>
                    <div className="left-section col-lg-4 p-3" >
                        <h1 className='text-center'>Sign In</h1>
                        
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
                        <p className='mt-3'>Create Your Account? <span><NavLink to="/home">SignUp</NavLink></span></p>
                    </div>
                    <SignImg />

                </section>
            </div>

    </>
  )
}

export default Login