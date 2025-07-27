const express = require("express") ;
const cors = require("cors");
require("dotenv").config();

const app = express() ;
app.use(cors())
app.use(express.json());

const routes = require("./routes");
app.use("/api",routes) ;


const connectDB = require("./connectToDb");

const port = 5000;



const startServer = async () => {
     await connectDB();
    app.listen(port, ()=> {
        console.log(`server is listening on http://localhost: ${port}`)
    });
}

startServer();