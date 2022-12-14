import React,{useEffect} from "react";
import {Switch, Router, Route} from "react-router-dom"
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";

import {auth} from './firebase'
import { useDispatch } from "react-redux";
const App = () =>{
  const dispatch = useDispatch()

  //check firebase auth state
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(async(user)=>{
      if(user){
        const idTokenResult= await user.getIdTokenResult() 
        console.log("user",user);
        dispatch({
          type: 'LOGGED_IN_USER',
          payload:{
            email : user.email,
            token: idTokenResult,

          }
        })
      }
    });
    //cleanup
    return ()=> unsubscribe();
  }, []);
    return (
      <>
      <Header />
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />

      </Switch>
      </>
  );
    };

export default App;
