import React, { Children, Component } from 'react';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Person from './people/People';
import Movie from './Movie/Movie';
import MovieDetails from './MovieDetails/MovieDetails';
import SimilarMovie from './similarMovie/SimilarMovie';
import SimilarTv from './SimilarTv/SimilarTv';
import Tv from './Tv/Tv';
import Login from './Login/Login';
import Register from './Register/Register';
import TvDetails from './TvDetails/TvDetails';
import jwtDecode from 'jwt-decode'
import PeopleDetails from './PeopleDetails/PeopleDetails';
import DefaultPage from './DefaultPage/DefaultPage';
import Error from './Error/Error';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';



function App() {

  let navigation = useNavigate()
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getUserData();
    }
  }, [])
  function getUserData() {
    let tokenDecoded = jwtDecode(localStorage.getItem("userToken"));
    setUserData(tokenDecoded)
  }
  function ProtectedRoute({ children }) {
    if (userData == null) {
     
      return <Navigate to='/defaultPage' />
    }
    else {
      
      return children
    }

  }
  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigation('./Login')
  }
  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])

  return (
    <div className="App">
      <NavBar userData={userData} logOut={logOut} />
      <div className="elements">
        <Routes>
          <Route path="*" element={<DefaultPage />} />
          <Route path="defaultPage" element={<DefaultPage />} />
          <Route path="login" element={<Login getUserData={getUserData} />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="movie/:page" element={<ProtectedRoute><Movie /></ProtectedRoute>} />
          <Route path="tv/:page" element={<ProtectedRoute><Tv /></ProtectedRoute>} />
          <Route path="people/:page" element={<ProtectedRoute><Person /></ProtectedRoute>} />
          <Route path="peopleDetails/:id" element={<ProtectedRoute><PeopleDetails /></ProtectedRoute>} ></Route>
          <Route path="movieDetails/:id" element={<ProtectedRoute><MovieDetails /></ProtectedRoute>}></Route>
          <Route path="tvDetails/:id" element={<ProtectedRoute><TvDetails /></ProtectedRoute>} />
          <Route path="similarMovie/:id" element={<ProtectedRoute><SimilarMovie /></ProtectedRoute>} ></Route>
          <Route path="similarTv/:id" element={<ProtectedRoute><SimilarTv /></ProtectedRoute>} ></Route>
          <Route path="/" element={<Error />} />
        </Routes>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
