const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors=require('cors')


//new MongoClient("mongodb://localhost:27017")
const client = new MongoClient('mongodb+srv://root:root@cluster.ej8g8.mongodb.net/courses?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const app = express();



app.use(express.json());
app.use(cors({origin: 'http://localhost:4200' }));
// app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('courses');
            req.db = db.collection('schools');
            next();
        });
    } else {
        req.db = db.collection('schools');
        next();
    }
})

app.post('/fill', async (req, res) => {
    await req.db.insertOne(req.body, (err, results) => res.json(results))
});

app.get('/courses', (req, res) => {
    req.db.find({}).toArray((err, data) => res.json(data))
})

app.patch('/courses/:id', async (req, res) => {
    
   await req.db.updateOne({"_id":parseInt(req.params.id)},{$set :{name:req.body.name, code:req.body.code}});
    req.db.find({}).toArray((err, data) => res.json(data))
})

// Delete by ID
app.delete('/courses/:id', async (req, res) => {
    
    const idd={_id: parseInt(req.params.id)};
    await req.db.deleteOne(idd);
    req.db.find({}).toArray((err, data) => res.json(data))
   
    
})


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('listening to 3000'))
