import React from 'react'
import pic1 from '../image/tv2.f1a462fb.gif'
import pic2 from '../image/mobile.19598b4d.gif'
import pic3 from '../image/cartoon.7e9c0c2f.png'
import $ from 'jquery'
import Footer from '../Footer/Footer'
export default function DefaultPage() {
  
  return (
    <div className="w-100   ">
      <div className="border"> </div>
      <div className='firstSection row d-flex justify-content-between align-content-center  '>
        <div className='leftContent col-md-5'>
          <img src={pic1} />
        </div>
        <div className='rightContent col-md-6  p-2  '>
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>

        </div>


      </div>
      <div className="border"> </div>


      <div className='firstSection row d-flex justify-content-between align-content-center \ '>

        <div className='rightContent col-md-6  p-2 '>
          <h2>Download your shows to watch offline</h2>
          <p>
            Save your favorites easily and always have something to watch.
          </p>

        </div>
        <div className='leftContent imgTwoContainer col-md-5'>
          <img src={pic2} />
        </div>


      </div>
      <div className="border"> </div>


      <div className='firstSection row d-flex justify-content-between align-content-center \ '>
        <div className='leftContent col-md-5'>
          <img src={pic3} />
        </div>
        <div className='rightContent col-md-6  p-2 '>
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>

        </div>


      </div>

      <div className="border"> </div>
      <div className="row lastSection">
        <div className="col-md-3 text-center">
          <h3>LOCATION</h3>
          <p>2215 John DanielDrive
            Clark, MO 65243</p>
        </div>
        <div className="col-md-3 text-center mt-2 mb-2">
          <h3>AROUND THE WEB</h3>

          <div className="socialContainer">
            <div className="social"><i className="fa-brands fa-facebook"></i></div>
            <div className="social"><i className="fa-brands fa-twitter"></i></div>
            <div className="social"><i className="fa-brands fa-linkedin"></i></div>
            <div className="social"><i className="fa-brands fa-github"></i></div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, MIT licensed Bootstrap theme created by .</p>
        </div>

      </div>
    </div>
  )
}







{/* <div className="firstSection  ">
        <div className='rightContent'>

          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>


        </div>
        <div className='leftContent secondImage'>
          <img src={pic2} />
        </div>



      </div> */}