import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Persons = () => {

    const [persons, setPersons] = useState([]);

    const [searchTerm, setSearchTerm] = useState([]); // variable for search item

    const handleSearch = (e) =>{
      setSearchTerm(e.target.value)
    }

    useEffect(() => {
      const fetchAllPersons = async () => {
        try {
          const res = await axios.get("http://localhost:8800/persons");
          setPersons(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllPersons();
    }, []);           
    
    const handleDelete = async (id) =>{  //delete function
        try{
            await axios.delete("http://localhost:8800/persons/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    
    
    return (
        <div>
          <h1>My Directory</h1>
          <input type="text" className="search" placeholder="search"  onChange={handleSearch} name="search"/>
          <div className="persons">
            {persons.filter((person)=>{  // filters each person by its name and surnames
              if(searchTerm == ""){
                return person
              } else if (person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.surname.toLowerCase().includes(searchTerm.toLowerCase())){
                return person
              }
            }).map((person) => (  // shows what we have
              <div key={person.id} className="person">
                <img src={person.personal_image} alt="" />
                <h2>{person.name}</h2>
                <h2>{person.surname}</h2>
                <p>{person.phone_number}</p>
                <p>{person.email}</p>
                <button className="update">  {/* Update button */}
                    <Link to={`/update/${person.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                      Update
                    </Link>
                </button> {/* Delete button */}
                <button className="delete" onClick={()=>handleDelete(person.id)} >
                    Delete
                </button>
              </div>
            ))}
          </div>
            <button className="addHome">  {/* Add button, directs users to another page */}
              <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                Add new person
              </Link>
            </button>
        </div>
      );
}

export default Persons