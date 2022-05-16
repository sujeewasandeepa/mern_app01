import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
//configure dotenv
dotenv.config();
//access mongo client
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 250,
    }
)
.catch(err => {
    console.error(err);
    process.exit(1);
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})