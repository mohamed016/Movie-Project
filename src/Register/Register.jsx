import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../image/registr.97ecf839.png'



export default function Register() {
    let navigate = useNavigate()
    const [errorList, setErrorList] = useState([])
    const [load, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: ``,
        last_name: ``,
        email: ``,
        age: ``,
        password: ``,
    })
    function getUser(e) {
        const myUser = { ...user }
        if (e.target.name == 'age') {
            let age = Number(e.target.value)
            myUser[e.target.name] = age
        }
        else {
            myUser[e.target.name] = e.target.value
        }
        setUser(myUser)
    }
    function setValidation(user) {
        let schema = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            age: Joi.number().min(20).max(60).required(),
            password: Joi.string().pattern(/^[a-z]{3,}[A-Z]{3,}[0-9]{4,30}$/).required(),
        })
        return schema.validate(user, { abortEarly: false })
    }
    async function submitUser(e) {
        e.preventDefault()
        setLoading(true)
        let valReg = setValidation(user)
        if (valReg.error) {
            setLoading(false)
            setErrorList(valReg.error.details)
        }
        else {
            let { data } = await axios.post(`https://route-movies-api.vercel.app/signup`, user)
            console.log(data)
            if (data.message === 'success') {
                setLoading(false)
                navigate('../Login')
            }
            else {
                setLoading(false)
                setError(data.message)
            }
        }

    }
    return (<div className="containerLogin">

        <div className='login'>
            {errorList.length ? errorList.map((error, index) => {
                if (error.message.includes('/^[a-z]{3,}[A-Z]{3,}[0-9]{4,30}$/')) {
                    return <div key={index} className="alert alert-danger">password must start with at least 3 small letter then at least 3 capital letter and at least 4 numbers</div>
                }
                else {
                    return <div key={index} className="alert alert-danger">{error.message}</div>
                }
            }) : ''}
            {error ? <div className="alert alert-danger">{error}</div> : ''}
            <form>
                <label>First Name:</label>
                <input onChange={getUser} className="form-control" type="text" name="first_name" />
                <label>Last Name:</label>
                <input onChange={getUser} className="form-control" type="text" name="last_name" />
                <label>Email:</label>
                <input onChange={getUser} className="form-control" type="email" name="email" />
                <label>Age:</label>
                <input onChange={getUser} className="form-control" type="number" name="age" />
                <label>Password:</label>
                <input onChange={getUser} className="form-control" type="password" name="password" />
                <div className="text-center">
                    <button onClick={submitUser} className="btn btn-outline-primary ms-auto mt-4" type="submit">
                        {load ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register'}
                    </button>
                </div>
            </form>
        </div>
        <div className='loginImg'>
            <img src={pic} />
        </div>

    </div>)
}


