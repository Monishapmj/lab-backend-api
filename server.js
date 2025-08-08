const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://MonishaJ:Ajiabimoni123@cluster0.8idyd6n.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
