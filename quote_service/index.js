const express = require('express');
const mongoose = require('mongoose');
const { MONGOURI } = require('./config/keys');

const app = express();

require('./routes/quoteRoutes')(app);

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    app.listen(5000, () => {
        console.log("MongoDB connected");
        console.log("Listening on port 5000");
    })
}).catch((err) => {
    console.log(err);
});
