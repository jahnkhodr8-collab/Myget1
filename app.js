const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const verifyRoutes = require('./routes/verifyRoutes');
const adRoutes = require('./routes/adRoutes');
const exploreRoutes = require('./routes/exploreRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myget');

app.use('/api/auth', authRoutes);
app.use('/api/verify', verifyRoutes);
app.use('/api/ad', adRoutes);
app.use('/api/explore', exploreRoutes);

app.listen(3000, () => console.log('My Get running on port 3000'));
