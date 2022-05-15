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
        wtimeout: 250,
        useNewUrlParse: true
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})