const Quote = require('../models/quote');

module.exports = (app) => {

    app.get('/add-quote', (req, res) => {
        console.log("Received get request");
        const quote = new Quote({
            text: "Clean duck?",
            author: "Chat"
        });

        quote.save()
            .then((result) => {
                console.log(result._id);
                res.status(200).send(result);
            })
            .catch((err => {
                console.log(err);
            }));
    });

    app.get('/get-quotes', (req, res) => {
        Quote.find()
            .then((result) => {
                res.status(200).send(result)
            }).catch((err) => {
                console.log(err);
            });
    });

    app.get('/get-quote', (req, res) => {
        Quote.findById('609e39e2e2713e445cc4c0e1')
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            });
    });
}