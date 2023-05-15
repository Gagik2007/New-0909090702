
// import { useState } from "react";
// import './App.js'
// import MyForm from "./components/MyForm/index.js";
// function App(){
//  const [formValues, setFormValues] = useState({email:'', password:'', remember: false})
  
//  const  onChange = (event)=>{
//     if(event.target.name === 'remember'){
//       setFormValues({...formValues, [event.target.name]: event.target.checked})
//     }else{
//         setFormValues({...formValues, [event.target.name]: event.target.checked}) 
//     }
//  }

//  const handleLogin = (event)=>{
//     event.preventDefault();
//     if(formValues.remember){
//       localStorage.setItem('userData', JSON.stringify(formValues))
//     }else{
//       sessionStorage.setItem('userData', JSON.stringify(formValues))
//     }
//     setIsLogedin(true);
//  }
// const logout = ()=>{
//   localStorage.clear();
//   sessionStorage.clear();
//   setIsLogedin(false);
// }

//     return (
//         <>
//      {
//       isLogedin?
     
//         </>
//     )
// }
// export default App;

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';





  function App(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
       let surprise= fetch('https://api.github.com/users');
       surprise.then ((response) =>{
        return response.json()
       }).then((response)=>{
        setUsers(response)
       })
    }, [])
    return(
      <>
      {
        users.map((item)=>{
          return(
            <>
            <li>{item.id} 13214534</li>
            <img src={item.avatar_url}  />
            </>
          )
        })
      }
      </>
    )
   }
   export default App;
