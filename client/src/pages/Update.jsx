import axios from "axios"
import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Update = () => {
    const [person,setPerson] = useState({
        name:"",
        surname:"",
        phone_number:null,
        personal_image:"",
        birthday:null,
        email:"",
    })

    const navigate = useNavigate()
    const location = useLocation()

    const personId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setPerson(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/persons/"+personId , person)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(person)
    return(
        <div className="form">
            <h1>Update The Person</h1>
            <input type="text" placeholder="name" onChange={handleChange} name="name"/>
            <input type="text" placeholder="surname" onChange={handleChange} name="surname" />
            <input type="number" placeholder="phone_number" onChange={handleChange} name="phone_number"/>
            <input type="text" placeholder="personal_image" onChange={handleChange} name="personal_image"/>
            <input type="date" placeholder="birthday" onChange={handleChange} name="birthday"/>
            <input type="text" placeholder="email" onChange={handleChange} name="email"/>
            <button className="formButton" onClick={handleClick}>
                Update
            </button>
        </div>
    )
}

export default Update