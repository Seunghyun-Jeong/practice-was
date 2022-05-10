'use strict'

const { readAll, readOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)

    reply
      .code(200)
      .header("content-type", "application/json")
      .send(result)
  })

  app.get('/:id', async function (request, reply) {
    const result = await readOne(this.mongo, request.params)


    reply
      .code(200)
      .header("content-type", "application/json")
      .send(result)
  })
}
