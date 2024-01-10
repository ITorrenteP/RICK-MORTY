import { useState, useEffect } from "react"
import validation from "./validation"

function Form ({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
       setUserData({...userData,
         [event.target.name]: event.target.value})
       }

     const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
      }

    useEffect(() => {
        if (userData.email !== '' || userData.password !== '') {
          const userValidated = validation(userData);
       setErrors(userValidated)  
        }
    },[userData])

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="text" 
                name="email" 
                value={userData.email}
                onChange={handleChange}
                />
                <span>{errors.email}</span>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
                />
                <span>{errors.password}</span>
            </div>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default Form