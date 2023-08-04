import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Persons = () => {

    const [persons, setPersons] = useState([]);

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
    
    return (
        <div>
          <h1>My Directory</h1>
          <div className="persons">
            {persons.map((person) => (
              <div key={person.id} className="person">
                <h2>{person.name}</h2>
                <p>{person.surname}</p>
                <p>{person.phone_number}</p>
                <p>{person.email}</p>
              </div>
            ))}
          </div>
            <button className="addHome">
              <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                Add new person
              </Link>
            </button>
        </div>
      );
}

export default Persons