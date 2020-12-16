var ApiBuilder = require('claudia-api-builder')
var api = new ApiBuilder()

module.exports = api;

api.get('/shape/square/perimeter/{length}', (req) => {
    let result = {}
    result['perimeter'] = req.pathParams.length * 4
    return result
})

api.get('/shape/square/area/{length}', (req) => {
    let result = {}
    result['area'] = Math.pow(req.pathParams.length,2)
    return result
})

api.get('/shape/circle/perimeter/{radius}', (req) => {
    let result = {}
    result['perimeter'] = 2 * Math.PI * req.pathParams.radius
    return result
})

api.get('/shape/circle/area/{radius}', (req) => {
    let result = {}
    result['area'] = Math.PI * Math.pow(req.pathParams.radius,2)
    return result
})
