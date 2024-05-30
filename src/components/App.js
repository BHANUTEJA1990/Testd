import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Header from './header';
import Create from './create';
import ComponentList from './ComponentList';
import Reactflow from './Reactflow';
import CreateComponent from './create';
function App() {
  const LOCAL_STORAGE_KEY = "component";
  const [CreateComponent, setCreate] = useState([]);
  const CreateComponentHandler = (Component) => {
    console.log(Component);
    setCreate(...Component, ComponentList)
  };
  // useEffect(() => {
  //   // localStorage.setItem("component_inf",JSON.stringfy(Component));
  // }, [Component]);
// localStorage.setItem("component_info",JSON.stringify([
//   {
//     id: "1",
//     "name": "svdc",
//     "memory": "100kb",
//     "microcontroler": "msp430"
//   },
//   {
//     id: "2",
//     "name": "svdc2",
//     "memory": "100kb",
//     "microcontroler": "msp450"
//   } 
// ])) 

  return (
    <div className='ui container'>
      <Header />
      <Create />

      <Reactflow />
      <ComponentList  />


    </div>

  )
}

export default App;
