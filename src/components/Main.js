import React             from 'react'
import { Route, Routes } from "react-router-dom";
import Header            from '../header/Header';
import SignInSide        from './SignIn/SignIn';
import SignUp            from './SignUp/SignUp';
import MyCity            from './citiesCatalog/index.js';
import CarFlow           from './carDetails';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Header/> }/>
      <Route exact path="/carDescription/:id" element={ <CarFlow/> }/>
      <Route exact path="/signin" element={ <SignInSide/> }/>
      <Route exact path="/main" element={ <Header/> }/>
      <Route exact path="/Signup" element={ <SignUp/> }/>
      <Route exact path="/city/:city" element={ <MyCity/> }/>

    </Routes>
  )
}

export default Main
