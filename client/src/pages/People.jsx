import React, { useEffect, useState } from "react"
import axios from "axios"


const People = () => {
    const  [people,setPeople] = useState([])

    useEffect(()=>{
        const FetchAllPeople = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/people")
                console.log(res)
            }catch(err){

            }
        }
        FetchAllPeople()
    },[])

    return(
        <div>People</div>
    )
}

export default People