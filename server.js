const express = require("express");

const app = express();
const PORT = 3400;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,resp)=>{
    resp.render('index');
})


app.post('/submit',(req,resp)=>{
    const name=req.body.name
    const email=req.body.email
    resp.render('result',{name:name,email:email})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});