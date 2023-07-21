import React, { useEffect, useState } from "react";

const Directory = () => {
    const [directory,setDirectory] = useState([])

    useEffect(()=>{
        const fectAllDirectory = async ()=>{
            try{
                const res = await axios.get
            }catch(err){
                console.log(err)
            }
        }
    })

    return(
        <div>
            Directory
        </div>
    )
}

export default Directory