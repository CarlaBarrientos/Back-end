const mongoClient = require('mongodb').MongoClient;
const URI = ('mongodb://localhost:27017/chess');

mongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err:any) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

module.exports = mongoClient;