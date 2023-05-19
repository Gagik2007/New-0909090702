
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

// import React, { useState, useEffect } from 'react';

// const url = 'https://api.github.com/users';





//   function App(){
//     const [users, setUsers] = useState([]);

//     useEffect(()=>{
//        let surprise= fetch('https://api.github.com/users');
//        surprise.then ((response) =>{
//         return response.json()
//        }).then((response)=>{
//         setUsers(response)
//        })
//     }, [])
//     return(
//       <>
//       {
//         users.map((item)=>{
//           return(
//             <>
//             <li>{item.id} 13214534</li>
//             <img src={item.avatar_url}  />
//             </>
//           )
//         })
//       }
//       </>
//     )
//    }
//    export default App;

// import React, { useState } from 'react';
// import  CountCard from './components/CountCard';
// import  ActionsList from './components/ActionsList';
// import Button from './components/Botton';
// import Context from './context'
// import './App.css';

// function App(){
//  const [count, setCount] = useState(0);
 
//  const ChangeCount = (value) =>{
//   setCount(count + value.target.value)
//  }

//  const value = {
//   count:count,
//   ChangeCount:ChangeCount

//  }
//  return (
// <>
    
//         <Context.Provider value = {value}>
//       <CountCard/>
//       <ActionsList/>
//       </Context.Provider>
   
//   </>
//  )
// }



// export default App;
// import { useState, useMemo } from "react";

// function App(){
//   const [name, setName] = useState("");
//   const [surname, setSurame] = useState("");
//   const [count, setCount] = useState(0);

//   const  user= useMemo(()=>{
//     console.log('ok');
//     return {
//       name: name,
//       surname: surname
//     }
//   }, [name, surname]);

//   return(
//     <div>
//       <button onClick={()=> setCount(count + 1)}>{count}</button>
//       <br/>
//       <input
//       type="text"
//       value={name}
//       onChange={e => setName(e.target.value)}
//       />
//        <input
//       type="text"
//       value={surname}
//       onChange={e => setSurame(e.target.value)}
//       />
//       <p>{JSON.stringify(user)}</p>
//     </div>
//   )
// }
// export default App

import React, { useState } from "react";
import "./App.css"
 
function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
 
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
 
  
    setList([...list, newTodo]);
 
    setInput("");
  };
 
  const deleteTodo = (id) => {
   
    const newList = list.filter((todo) => todo.id !== id);
 
    setList(newList);
  };
 
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
 