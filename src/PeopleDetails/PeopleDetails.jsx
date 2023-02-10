import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import ReactOwlCarousel from 'react-owl-carousel';


export default function PeopleDetails() {
  let params = useParams()
  const [peopleDetails, setPeopleDetails] = useState({})
  const [hisMovie, setHisMovie] = useState([])
  const [isDataExist, setIsDataExist] = useState(false)
  useEffect(() => {
    getPeopleDetails()

  }, [])
  useEffect(() => {
    getPeopleMovie()
  }, [])

  useEffect(() => {
   
  }, [hisMovie])



  const getPeopleDetails = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=679feeef7bb8213791d03a04134cf6c5&language=en-US`)
    setPeopleDetails(data)
  }

  const getPeopleMovie = async () => {
    const { data } = await axios.get(`  https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=679feeef7bb8213791d03a04134cf6c5&language=en-US`)
    setHisMovie(data.cast.slice(0, 20))
    setIsDataExist(true)
  }
  useEffect(() => {
  }, [peopleDetails])
  return <div className="row d-flex justify-content-center">
    <div className="col-md-5 ">
      <div className=" w-100 h-50 m-auto text-center  ">
        <img className=" w-75  rounded poster " src={'https://image.tmdb.org/t/p/w500' + peopleDetails.profile_path} />
      </div>
    </div>
    <div className="col-md-8 mt-">
      <div className="movieDetails">
        <h3 className="h1 text-center">{peopleDetails.name}</h3>
        <table className="table table-striped table-bordered ">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                {peopleDetails.name
                }
              </td>
            </tr>
            <tr>
              <td>place of birth</td>
              <td>
                {peopleDetails.place_of_birth
                }
              </td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>{peopleDetails.birthday}</td>
            </tr>
            <tr>
              <td>popularity</td>
              <td>{peopleDetails.popularity}</td>

            </tr>

            <tr>
              <td>biography</td>
              <td>{peopleDetails.biography}</td>
            </tr>
            <tr>
              <td>known for department</td>
              <td>{peopleDetails.known_for_department}</td>
            </tr>
            {/* */}


          </tbody>

        </table>

      </div>
    </div>
    <div className='OwlParent container col-md-9 m-auto mt-5'>
      <h4>His Movie</h4>
      <hr />
      {isDataExist ? <ReactOwlCarousel
        className="owl-theme"
        items={5}
        loop
        nav
        dotData={true}
        autoplay={true}
        margin={8}
      >

        {
          hisMovie.map((e, index) => <div className='items slider' key={index} >

            <div className='imgSlider bg-black w-100 '>
              <Link to={`/similarMovie/${e.id}`}>
                <img className=" w-100  img-fluid h-100 poster" src={'https://image.tmdb.org/t/p/w500' + e.poster_path} />
              </Link>

            </div>
            <div className='  mt-2'>
              <h4 className="h6">{e.original_title}</h4>
            </div>


          </div>)
        }


      </ReactOwlCarousel> : <></>}

    </div>

  </div>

}
{

}


{/* <div className='imgSlider bg-black w-100 '>
                  <Link to={`/similarMovie/${e.id}`}>
                    <img className=" w-100  img-fluid h-100" src={'https://image.tmdb.org/t/p/w500' + e.poster_path} />
                  </Link>

                </div>
                <div className='  mt-2'>
                  <h4 className="h6">{e.original_title}</h4>
                </div> */}
