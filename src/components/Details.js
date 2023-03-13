import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Details = () => {

  const history = useNavigate();



    const Birthday = () =>{
       const getuser = localStorage.getItem("user_login");
       if (getuser && getuser.length) {
        const user = JSON.parse(getuser);
        console.log(user);
    }
  }

  const userLogout=()=>{
    localStorage.removeItem("user_login");
    history("/");
  }


    useEffect(() => {
     Birthday();
    }, [])
    
  return (
    <>
    <Navbar>
        <Container>
      
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto p-2" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end p-2">
              <button type="button " className="btn btn-light text-dark me-2">Login</button>
              <button type="button"  className="btn btn-primary">Sign-up</button>
            </div>
          </div>
        </div>
        
        </Container>
      </Navbar>
    <div>
     <h1>Details</h1> 
      </div>
    <button variant="outline-danger" onClick={userLogout}>LogOut</button>
    </>
  )
}

export default Details