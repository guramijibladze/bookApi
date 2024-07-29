const express = require('express')
const booksRoutes = require('')
const app = express();

//middleware
app.use(express.json())


//connect mongoDB
mongoose.connect('mongodb+srv://guramijibladze:XlyvB5BXK62t0zDB@cluster0.dzllhg5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    })
  })
  .catch(() => console.log('connection faild!'))

  app.get('/', async (req, res) => {
    res.send('Hello from node api Server updated !!!')

    try {
      // აქ შეგიძლიათ მონაცემთა ბაზასთან ოპერაციების შესრულება
      const data = await Product.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });