/*
Learn how to deploy this to AWS (Lambda + API Gateway) using Claudia.js
at the following URL

https://github.com/raymondwcs/claudia

*/

var ApiBuilder = require('claudia-api-builder')
var api = new ApiBuilder()

module.exports = api;

api.get('/shape/square/perimeter', (req) => {
    let result = {}
    result['perimeter'] = req.queryString.length * 4
    return result
})

api.get('/shape/square/area', (req) => {
    let result = {}
    result['area'] = Math.pow(req.queryString.length,2)
    return result
})

api.get('/shape/circle/perimeter', (req) => {
    let result = {}
    result['perimeter'] = 2 * Math.PI * req.queryString.radius
    return result
})

api.get('/shape/circle/area', (req) => {
    let result = {}
    result['area'] = Math.PI * Math.pow(req.queryString.radius,2)
    return result
})