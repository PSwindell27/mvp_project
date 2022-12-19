import express from "express";
import postgres from "postgres";
import morgan from "morgan";
import dotenv from "dotenv";


dotenv.config();

const sql = postgres(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);

const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("./client"));


/*=======================Retrieve All Table Information=======================*/
app.get("/api/account", (req, res, next) => {
    sql`SELECT * FROM account`.then((result) => {
        console.log(result)
        res.json(result);
    }).catch(next);
});
// app.get("/api/friends", (req, res, next) => {
//     sql`SELECT * FROM user_info`.then((result) => {
//         res.json(result);
//     }).catch(next);
// });

// app.get("/api/messages", (req, res, next) => {
//     sql`SELECT * FROM user_info`.then((result) => {
//         res.json(result);
//     }).catch(next);
// });

/*=======================Retrieve Table Information at Index=======================*/

app.get("/api/account/:id", (req, res, next) =>{
    const id = req.params.id;
    sql`SELECT * FROM account WHERE user_id = ${id}`.then((result) =>{
        if(result.length === 0){
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.end("Not Found");
        }else{
            res.json(result[0]);
            console.log(result[0]);
        }
    }).catch(next);
});

// app.get("/api/friends/:id", (req, res, next) =>{
//     const id = req.params.id;
//     sql`SELECT * FROM friends WHERE user_id = ${id}`.then((result) =>{
//         if(result.length === 0){
//             res.status(404);
//             res.set("Content-Type", "text/plain");
//             res.end("Not Found");
//         }else{
//             res.json(result[0]);
//             console.log(result[0]);
//         }
//     }).catch(next);
// });

// app.get("/api/messages/:id", (req, res, next) =>{
//     const id = req.params.id;
//     sql`SELECT * FROM messages WHERE user_id = ${id}`.then((result) =>{
//         if(result.length === 0){
//             res.status(404);
//             res.set("Content-Type", "text/plain");
//             res.end("Not Found");
//         }else{
//             res.json(result[0]);
//             console.log(result[0]);
//         }
//     }).catch(next);
// });

 /*======================Post Methods=====================================*/

 app.post("/api/account", (req, res, next) =>{
    const entry = req.body;
    const requiredFields = ["first_name", "last_name", "email", "username"];
    const errors = [];

    for(let field of requiredFields){
        if(entry[field] === undefined){
            errors.push(`Missing User: '${field}'.`);
        }
        const { first_name, last_name, email, username } = entry;
        if(errors.length > 0){
            res.status(422);
            res.send(errors.join(" "));
        }else{
            sql`INSERT INTO account (first_name, last_name, email, username) VALUES (${first_name}, ${last_name}, ${email}, ${username}) RETURNING *`.then(result => {
                res.status(201);
                res.json(result[0]);
            }).catch(next);
        }
    }
});

 /*======================Patch Code block=====================================*/

//  app.patch("/api/account/:id", (req, res, next) => {
//     const  id  = req.params.id;
//     const { first_name, last_name, email, username } = req.body;
//     sql`
//     UPDATE account
//     SET ${sql(req.body)}
//     WHERE id = ${id} RETURNING *`
//     .then(result => {
//         console.log(result.statement.string);
//         res.send(result[0])
//     }).catch(next);
// });

 /*======================Delete Code block=====================================*/

app.delete("/api/account/:id", (req, res, next) => {
    const id = req.params.id;
    sql`DELETE FROM account WHERE user_id = ${id}`.then(result => {
        res.send(`DELETED id: ${id}`);
    }).catch(next);
});
 /*======================Error Code block=====================================*/
app.use((err, req, res, next) =>{
    console.error(err);
    res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
    console.log(`Server Running on Port: ${port}`);
}); 