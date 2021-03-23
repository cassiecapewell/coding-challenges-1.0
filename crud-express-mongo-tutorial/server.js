console.log('May Node be with youuu')

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://outerspace-cc:england3@cluster0.c62m3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    // console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

// MIDDLEWARES
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(express.static('public'))
    app.use(bodyParser.json())



// ROUTES
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
          .then(quotes => {
            res.render('index.ejs', { quotes: quotes })
            // console.log(results)
          })
          .catch(error => console.error(error))
      // const cursor = db.collection('quotes').find()
      // console.log(cursor)
      // res.sendFile(__dirname + '/index.html')
    })


    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => {
          res.json('Success')
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function() {
      console.log('listening on 3000')
    })

    app.delete('/quotes', (req, res) => {
      quotesCollection.deleteOne(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json('Deleted Darth Vadar\'s quote')
        })
        .catch(error => console.error(error))
    })

  })
  .catch(error => console.error(error))
