import express from "express";
import mysql from "mysql";
import cors from "cors";

const app =express()

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"mydb"
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is backend")
})

app.get("/persons", (req,res)=>{                 //GET
    const q = "SELECT * FROM persons"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/persons", (req,res)=>{               //POST
    const q = "INSERT INTO persons (name,surname,phone_number,personal_image,birthday,email) VALUES (?)";
    const values = [
        req.body.name,
        req.body.surname,
        req.body.phone_number,
        req.body.personal_image,
        req.body.birthday,
        req.body.email,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Person has been saved.");
    });
})

app.delete("/persons/:id", (req,res)=>{         //DELETE
    const personId = req.params.id;
    const q = "DELETE FROM persons WHERE id = ?"

    db.query(q,[personId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Person has been deleted.");
    });
})

app.put("/persons/:id", (req,res)=>{            //PUT
    const personId = req.params.id;
    const q = "UPDATE persons SET `name`=?, `surname`=?, `phone_number`=?, `personal_image`=?, `birthday`=?, `email`=? WHERE id =?"
    const values = [
        req.body.name,
        req.body.surname,
        req.body.phone_number,
        req.body.personal_image,
        req.body.birthday,
        req.body.email,
    ];
    
    
    db.query(q,[...values,personId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Person has been updated.");
    });
})

app.listen(8800, ()=>{                      //LISTEN
    console.log("Connected to backend")
})