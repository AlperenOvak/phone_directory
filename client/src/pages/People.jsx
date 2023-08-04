import React, { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchAllPeople = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPeople();
  }, []);

  return <div>People</div>;
};

export default People;
