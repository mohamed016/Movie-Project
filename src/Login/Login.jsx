import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../image/registr.97ecf839.png'


export default function Login(props) {
  let navigate = useNavigate()
  const [load, setLoading] = useState()
  const [error, setError] = useState()
  const [errorMessage, setErrorMessage] = useState()
  useState(() => {
  }, [error])
  const [user, setUser] = useState({
    email: ``,
    password: ``,
  })
  function getUser(e) {
    const myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)
  }

  async function submitUser(e) {
    e.preventDefault()
    setLoading(true)
    let { data } = await axios.post(`https://route-movies-api.vercel.app/signin`, user)
    if (data.message === 'success') {

      localStorage.setItem("userToken", data.token)
      props.getUserData()
      setLoading(false)
      navigate('../Home')
    }
    else {

      setErrorMessage(data.message)
      setLoading(false)
      setError(true)


    }


  }
  return (<div className="containerLogin">
    <div className='login'>
      {error ? <div className="alert alert-danger">{errorMessage}</div> : ""}
      <form>
        <label>Email:</label>
        <input onChange={getUser} className="form-control" type="email" name="email" />
        <label>Password:</label>
        <input onChange={getUser} className="form-control" type="password" name="password" />
        <div className="text-center">
          <button onClick={submitUser} className="btn  ms-auto mt-4" type="submit">
            {load ? <div> <i className="fa-solid fa-spinner fa-spin"></i> </div> : 'login'}
          </button>
        </div>
      </form>
    </div>
    <div className='loginImg'>
      <img src={pic} />
    </div>

  </div>)
}















































