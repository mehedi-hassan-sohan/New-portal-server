const express = require('express')
const app = express()
const port = process.env.Port||5000
const cors = require('cors')
const category = require('./Data/category.json')
const news = require('./Data/news.json')

app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('dragon is running')
})
app.get('/category',(req,res)=>{
        res.send(category)
})
app.get('/news',(req,res)=>{
        res.send(news)
})
 
app.get('/news/:id',(req,res)=>{
  const id = req.params.id
  const selectedNews = news.find(n=>n._id === id) 
  res.send(selectedNews)
})

app.get('/category/:id', (req,res)=> {
  const id = parseInt(req.params.id)
   if(id === 0) {

    res.send(news)
  }
  else{

    const categoryNews = news.filter( n =>parseInt(n.category_id) === id) 
    res.send(categoryNews)
  }
  
})

app.listen(port,()=>{
    console.log(`dragon is run on api port ${port}`);
})