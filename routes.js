module.exports = function(app) {
    let controller = require('./controller');
    app.route('').get((req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    app.route('/search/:q').get(controller.search);
}