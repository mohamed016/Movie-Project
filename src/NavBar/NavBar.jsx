


import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'


export default function NavBar(props) {
  $(window).on('scroll', function (e) {
    if(e.currentTarget.pageYOffset>0){

      $(".navBarr ").css("background-color", "red");
      $(".navbar-brand ").css("color", "white");
      
      
    }
    else{
      $(".navBarr ").css("background-color", "transparent");
      $(".navbar-brand ").css("color", "red");

    }

// 
  })

  return (
    <div className='ps-5 pe-5 navBarr   '>
      <nav className="navbar navbar-expand-lg navbar-dark  m-auto">
        <div className="container-fluid">

          <Link className="navbar-brand" to="defaultPage">
            Noxe
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.userData ? <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link" aria-current="page" to="home">Home</Link>
                <Link className="nav-link" to="people/1">People</Link>
                <Link className="nav-link" to="movie/1">Movie</Link>
                <Link className="nav-link" to="tv/1">TV</Link>
              </ul>

            </> : ''}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {props.userData ? <>
                <div className="icon d-flex align-items-center">

                  <i className="icon1 fab me-2 fa-instagram"></i>
                  <i className="icon2 fab me-2 fa-facebook"></i>
                  <i className="icon3 fab me-2 fa-youtube"></i>
                  <i className="icon4 fa-brands fa-spotify"></i>

                </div>
                <span className="nav-link btnLogOut" onClick={props.logOut}>Logout</span>


              </> : <>

                <Link className="nav-link" to="login">Login</Link>
                <Link className="nav-link" to="register">Register</Link>
              </>}

            </ul>

          </div>
        </div>
      </nav>


    </div>
  )


}
