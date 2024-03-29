import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from 'cors';
import routes from "./routes";


const PORT = process.env.PORT || 3000
const helmet = require('helmet');

createConnection()
.then(async () => {

    // create express app
    const app = express();

    // Middlewares
    app.use(cors());
    app.use(helmet());


    app.use(express.json());

    //Routes
    app.use('/',routes);
    // start express server
    app.listen(PORT,() => console.log(`Server running on port ${PORT}`));


}).catch(error => console.log(error));
