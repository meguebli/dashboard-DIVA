const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port = 8080;
const caRoute=require('./routes/caRoute');
const msgRoute=require('./routes/msg.route');
const chaineRoute=require('./routes/chaine.route');

// route 
app.use('/ca',caRoute )
app.use('/msg',msgRoute )
app.use('/chaine',chaineRoute )

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})