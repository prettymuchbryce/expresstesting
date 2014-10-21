var my_great_api_route = function(req, res) {
    req.session = 'foo'
    res.send('hello world!')
}

module.exports = my_great_api_route