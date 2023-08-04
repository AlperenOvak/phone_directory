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

app.get("/persons", (req,res)=>{
    const q = "SELECT * FROM persons"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/persons", (req,res)=>{
    const q = "INSERT INTO persons (name,surname,phone_number) VALUES (?)";
    const values = [
        req.body.name,
        req.body.surname,
        req.body.phone_number,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Person has been saved.");
    });
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})