var api_route = require('../src/api-route')
var assert = require('assert')

describe('api_route', function() {
    it('should return -1 when the value is not present', function() {
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
