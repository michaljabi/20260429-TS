import { Hono } from 'hono'
import { requestId } from 'hono/request-id'
import { logger } from 'hono/logger'
import { carsController } from "./cars/cars.controller.js";

export const app = new Hono()

app.use(requestId())
app.use(logger())

app.get('/', (c) => {
    const id = c.get('requestId')
    console.log(`Request id: ${id}`)
    return c.text('Hello Hono!')
})

app.route('/cars', carsController)

// Odkomentuj i zaimplementuj dla zadania #3:
/*
app.onError((err, c) => {
    console.error(`${err}`)
    return c.text('Custom Error Message', 500)
})
*/


// Inne przydatne rozwinięcie:
/*
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})
*/