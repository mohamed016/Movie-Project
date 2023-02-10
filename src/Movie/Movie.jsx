import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Movie() {
  let param=useParams()
  const [movie, setMovie] = useState([])
  useEffect(() => { getTrending(param.page) }, [])
  async function getTrending(pageNumber) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=679feeef7bb8213791d03a04134cf6c5&page=${pageNumber}`)
    setMovie(data.results)
   
  }
  
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-4 header">
        <h1>trending <br /> Movie<br />to watch naw</h1>
        <p className="text-muted">most watched movies by days</p>
      </div>
      {movie.map((trend, index) => <div key={index} className="col-md-2">
        <div className="p-3">
          <Link to={`/movieDetails/${trend.id}`}>
            <img className="w-100 poster" src={'https://image.tmdb.org/t/p/w500/' + trend.poster_path} />
          </Link>
         

        </div>

      </div>)
      }
      <nav className="d-flex justify-content-center" aria-label="...">
        <ul className="pagination pagination-sm">

          <li onClick={() => getTrending(1)} className="page-item active" aria-current="page">
            <Link className="page-link default" to={`/movie/${param.page}`}>Default</Link>
          </li>
          {[...Array(6)].map((ele, index) => (
            <li key={index} onClick={() => getTrending(param.page)} className="page-item"><Link to={`/movie/${index+2}`} className="page-link pageLink" >{index + 1}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
