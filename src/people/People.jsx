import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import pic from '../image/672-6722829_no-result-found.png'

export default function Person() {
  let params = useParams()
  const [person, setPerson] = useState([])

  useEffect(() => {
    getPerson(params.page)
    
  }, [])
  

    const getPerson = async (page) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=679feeef7bb8213791d03a04134cf6c5&page=${page}`)
    setPerson(data.results)
  }

  return (
    <div className="row d-flex justify-content-center ">
      <div className="col-md-4 header">
        <h1>trending <br /> Pearson<br />to watch naw</h1>
        <p className="text-muted">most watched pearson by days</p>
      </div>
      {person.map((trend, index) => <div key={index} className="col-md-2 text-center">
        <div className="p-3 h-100 text-center">
          <Link to={`/peopleDetails/${trend.id}`}>
            {trend.profile_path ? <img className="w-100 h-100 poster" src={'https://image.tmdb.org/t/p/w500/' + trend.profile_path} /> :

              <img className="w-100 h-100 poster" src={pic} />
            }

          </Link>
          <h3 className="h6">{trend.name}</h3>

        </div>

      </div>)
      }
      <nav className="d-flex justify-content-center mt-3" aria-label="...">
        <ul className="pagination pagination-sm">

          <li onClick={() => getPerson(params.page)} className="page-item active" aria-current="page">
            <Link className="page-link default" to={`/people/${1}`}>Default</Link>
          </li>

          {[...Array(6)].map((ele, index) => (
            <li key={index} onClick={() => getPerson(params.page)} className="page-item"><Link className="page-link pageLink" to={`/people/${index + 2}`}>{index + 1}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
