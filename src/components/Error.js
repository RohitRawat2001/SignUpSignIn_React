import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const history = useNavigate();
    return (
        <>

            <div className='container'>
                <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                    <img src="./error.jpg" alt="error" className='errorimg mt-5' />
                    <h4>
                        404 Error! Page Not Found <h1>😭😜😜😜😜</h1></h4>
                    <button className='btn btn-primary' onClick={() => history("/")}>Redirect Login Page</button>
                </div>

            </div>
        </>
    )
}

export default Error