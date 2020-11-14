require('dotenv')
    .config();
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

require('./services/passport');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.post("/likeRecipe",(req,res) =>{
//   console.log(req.body);
//   res.json({status: "ok"})
// } )

app.use(routes);

app.listen(PORT, () => {
    console.log('Server started listening on PORT http://localhost:3001');
});