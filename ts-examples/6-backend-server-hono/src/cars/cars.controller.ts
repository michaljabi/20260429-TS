import { type Context, Hono } from "hono";
import { carsService } from "./cars.service.js";

export const carsController = new Hono()


carsController.get("", (c: Context) => {
    const brand = c.req.query("brand")
    return c.json(carsService.getAll(brand))
})

carsController.get("/:uid", (c: Context) => {
    const uid = c.req.param("uid");
    // Zadanie #1:
    // napraw poniższy problem TS2345
    const car = carsService.getByUid(uid)

    if (!car) {
        return c.json({message: `Car ${uid} not found`}, 404)
    }

    return c.json(car)
})

carsController.post('', async (c: Context) => {
    // Zadanie #2 (c.d.) - popraw <any> na odpowiedni, spodziewany typ.
    const body = await c.req.json<any>();
    const newCar = carsService.create(body);
    return c.json(newCar, 201);
})

