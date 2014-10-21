var api_route = require('../src/api-route')
var assert = require('assert')

describe('api_route', function() {
    it('should verify that session was changed', function() {
        var req = new function() {

        }

        var res = new function() {
            this.send = function() {

            }
        }

        api_route(req, res)

        assert.equal(req.session, 'foo')
    })
})
