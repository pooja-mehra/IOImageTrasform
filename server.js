const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('./blob/mirror_pipeline.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('/api', router)
server.listen(process.env.PORT || 8081, () => {
  console.log('JSON Server is running')
})
