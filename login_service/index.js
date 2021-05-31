const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const mongoose = require('mongoose');
const { MONGOURI } = require('./config/keys');

//To run passport.js config we must require it, it wont run automatically
require('./services/passport');

const app = express();

app.use(cookieSession({
    maxAge: 60 * 60 * 100,
    keys: [keys.COOKIEKEY]
}));

// Init passport
app.use(passport.initialize());
app.use(passport.session());

// Init route file
app.use('/auth', authRoutes);
app.use('/session', sessionRoutes);

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    app.listen(5001, () => {
        console.log("MongoDB connected");
        console.log("Listening on port 5001");
    })
}).catch((err) => {
    console.log(err);
});