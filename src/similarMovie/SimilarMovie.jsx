import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useParams, Link } from 'react-router-dom';
import pic from '../image/no-image-found.jpg'

export default function SimilarMovie() {
    let params = useParams();
    useEffect(() => {
        movieDetails()
    }, [])
    useEffect(() => {
        similarMovie()
    }, [])
   
    const [similarMovieData, setSimilarMovieData] = useState([])
    const [MovieDetails, setMovieDetails] = useState({})
    const [MovieCountry, setMovieCountry] = useState([])
    const [MovieGenres, setMovieGenres] = useState([])
    const [MovieCompany, setMovieCompany] = useState([])
    const [isSimilarExist, setIsSimilarExist] = useState(false)
    async function movieDetails() {

        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=679feeef7bb8213791d03a04134cf6c5&language=en-US`)
      
        setMovieDetails(data)
        setMovieCountry(data.production_countries)
        setMovieCompany(data.production_companies)
        setMovieGenres(data.genres)
    }

    async function similarMovie() {

        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=679feeef7bb8213791d03a04134cf6c5&language=en-US&page=1`)
        if (data.length != 0) {
            let result = await data.results
            setSimilarMovieData(result)
            setIsSimilarExist(true)
        }

    }
    return <div className="row">
        <div className="col-md-6  ">
            <div className="imgCon">
                <img className=" w-100 h-100" src={'https://image.tmdb.org/t/p/w500' + MovieDetails.poster_path} />
            </div>
        </div>
        <div className="col-md-6 mt-5">
            <div className="movieDetails">
                <h3 className="h1 text-center">{MovieDetails.title}</h3>
                <table className="table table-striped table-bordered ">
                    <tbody>

                        <tr>
                            <td>Country</td>
                            <td>
                                {MovieCountry.map((e, index) => <span key={index}>{MovieCountry.indexOf(e) ? ',' : ''}{e.name}</span>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Vote</td>
                            <td><i className="fa-solid fa-star star"></i>&nbsp;&nbsp;{MovieDetails.vote_average}&nbsp;&nbsp;from 10 &nbsp;&nbsp;,  {MovieDetails.vote_count} vote</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{MovieDetails.original_language}</td>
                        </tr>
                        <tr>
                            <td>Movie release date</td>
                            <td>{MovieDetails.release_date}</td>
                        </tr>
                        <tr>
                            <td>Count of view</td>
                            <td>{MovieDetails.runtime}</td>
                        </tr>
                        <tr>
                            <td>genres</td>
                            <td>{MovieGenres.map((e, index) => <span key={index}>

                                {MovieGenres.indexOf(e) ? ',' : ""}
                                {e.name}
                            </span>
                            )
                            }
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
        <div className="col-md-10  m-auto mt-3 ">
            <div className="overviewDetails">
                <h4>Overview</h4>
                <hr />
                <p>{MovieDetails.overview}</p>
            </div>
            <div>
                <h4>Production Companies</h4>
                <hr />
                <div className='containerCompanyLogo'>
                    {MovieCompany.map((e, index) => <div className=' companyLogo text-center' key={index}>
                        <div className='imgContainer'>{e.logo_path ? <img className=" w-100" src={'https://image.tmdb.org/t/p/w500' + e.logo_path} /> : <img className=" w-100 " src={pic} />}</div>
                        <div className='nameCompany'><h5>{e.name}</h5></div>
                    </div>)}
                </div>
            </div>
        </div>
        <div className='col-md-10 m-auto mt-3'>
            <h4>Similar Movie</h4>
            <hr />

        </div>
        {isSimilarExist ? <div className='OwlParent container col-md-9 m-auto'>
            <OwlCarousel
                className="owl-theme"
                items={5}
                loop
                nav
                dotData={true}
                autoplay={true}
                margin={8}
            >
                {
                    similarMovieData.map((e, index) => <div className='items slider' key={index} >

                        <div className='imgSlider bg-black w-100 '>
                            <Link to={`/movieDetails/${e.id}`}>
                                <img className=" w-100  img-fluid h-100 " src={'https://image.tmdb.org/t/p/w500' + e.poster_path} />
                            </Link>

                        </div>
                        <div className='  mt-2'>
                            <h4 className="h6">{e.original_title}</h4>
                        </div>


                    </div>)
                }
            </OwlCarousel>

        </div>
            : <div className=' p-2'>
                <h4>index</h4>
            </div>}

    </div>;
}
