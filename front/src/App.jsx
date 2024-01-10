import React, { useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import axios from "axios"
import About from "./components/About";
import Detail from "./components/detail";
import Error404 from "./components/Error404";
import Form from "./components/Form";
import Favorites from "./components/Favorites";



// const USER_EMAIL = 'isa@gmail.com'
// const USER_PASSWORD = 'isa1234'
const URL = `http://localhost:3001/rickandmorty`


function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  
  const location = useLocation()
  const mostrarNav = location.pathname !== '/';

  const navigate = useNavigate()

  // const API_KEY = 'pi-itorrentep'
  
  async function onSearch(id) {
    if (!id) alert('Ingresa un ID')
    if (characters.find(char => char.id === parseInt(id))) {
      return alert(`Ya existe personaje con id ${id}`)
    }

    try {
      const {data} = await axios.get(`${URL}/character/${id}`)

      setCharacters(oldChars => [...oldChars, data])
    } catch (error) {
      alert(error.response.data);
    }
    
    // axios(`${URL}/character/${id}`).then(
    //    ({ data }) => setCharacters((oldChars) => [...oldChars, data]))
    //    .catch(err => alert(err.response.data.error))
 }
 
 const onClose = (id) => {
    const numericId = parseInt(id, 10)
    const updatedCharacters = characters.filter((character) => character.id !== numericId);
    setCharacters(updatedCharacters);
  };

  async function login (userData) {
    
    try {
      const { data } = await axios(`${URL}/login?email=${userData.email}&password=${userData.password}`)

      const { access } = data

      setAccess(access)
      access && navigate('/home')
    } catch (error) {
      alert(error.response.data.message);
    }
    // axios(`${URL}/login?email=${userData.email}&password=${userData.password}`)
    // .then(({data})=>{
    //   const {access} = data

    //   setAccess(access)
    //   
    // }).catch((err)=>alert(err.response.data.message))
  }

  useEffect(() => {
    !access && navigate('/');
  },[access]);


  return (
    <div className="App">
      {mostrarNav && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        
        <Route path="/home" element={<Cards characters={characters} 
        onClose={onClose}/>}/>
        
        <Route path="/about" element={<About/>} />
        
        <Route path="/detail/:id" element={<Detail/>}/>

        <Route path="/favorites" element={<Favorites/>}/>

        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
