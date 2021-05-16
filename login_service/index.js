const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express();

app.listen(5001, () => {
    console.log('Listening on 5001')
})