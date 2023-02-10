import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../image/672-6722829_no-result-found.png'

export default function Home() {
  const [trendingMovie, setMovie] = useState([])
  const [trendingTv, setTv] = useState([])
  const [trendingPerson, setPerson] = useState([])
  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=679feeef7bb8213791d03a04134cf6c5`)
    callback(data.results.slice(0, 9))
    
  }
  useEffect(() => {
    getTrending('movie', setMovie);
    getTrending('tv', setTv);
    getTrending('person', setPerson);
  }, [])
  return (<>
    <div className="row">
      <div className="col-md-4 header">
        <h1>trending <br /> Movie<br />to watch now</h1>
        <p className="text-muted">most watched movies by days</p>
      </div>
      {trendingMovie.map((trend, index) => <div key={index} className="col-md-2   ">
        <div className="p-3">
          <Link to={`/movieDetails/${trend.id}`}>  <img className="w-100 poster" src={'https://image.tmdb.org/t/p/w500/' + trend.poster_path} />  </Link>

        </div>
      </div>)
      }
      <div className="col-md-2  p-3">
        <Link to="/movie/1">
          <div className="more  ">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </Link>

      </div>
    </div>

    <div className="row">
      <div className="col-md-4 header">
        <h1>trending <br /> TV<br />to watch naw</h1>
        <p className="text-muted">most watched tv by days</p>
      </div>
      {trendingTv.map((trend, index) => <div key={index} className="col-md-2">
        <div className="p-3 text-center">
         
          <Link className="" to={`/tvDetails/${trend.id}`}>
            <img className="w-100 poster" src={'https://image.tmdb.org/t/p/w500/' + trend.poster_path} />
          </Link>
          <h3 className="h6">{trend.original_title}</h3>
        </div>
      </div>)
      }
      <div className="col-md-2  p-3">
        <Link to="/tv/1">
          <div className="more  ">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </Link>

      </div>
    </div>
    <div className="row">
      <div className="col-md-4 header">
        <h1>trending <br /> Person<br />to watch naw</h1>
        <p className="text-muted">most watched person by days</p>
      </div>
      {trendingPerson.map((trend, index) => <div key={index} className="col-md-2 text-center">
        <div className="p-3 h-100 ">
          <div className="h-100">
            {trend.profile_path ? <Link to={`/peopleDetails/${trend.id}`}><img className="w-100 h-100 poster" src={'https://image.tmdb.org/t/p/w500/' + trend.profile_path} /></Link> :
              <Link to={`/peopleDetails/${trend.id}`}>
                <img className="w-100 h-100 poster" src={pic} />

              </Link>
            }
          </div>
          <h3 className="h6">{trend.original_name}</h3>
        </div>
      </div>)
      }
      <div className="col-md-2  p-3">
        <Link to="/people/1">
          <div className="more person  ">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </Link>

      </div>
    </div>

  </>


  )
}
