import { describe, expect, it } from 'vitest'
import { app } from '../app.js'

describe('Cars API Integration Tests', () => {

  it('GET /cars - should return all cars', async () => {
    const res = await app.request('/cars')
    expect(res.status).toBe(200)

    const cars = (await res.json()) as any[]
    expect(Array.isArray(cars)).toBe(true)
    expect(cars.length).toBeGreaterThan(0)
  })

  it('GET /cars?brand=Tesla - should return only Tesla cars', async () => {
    const res = await app.request('/cars?brand=Tesla')
    expect(res.status).toBe(200)

    const cars = (await res.json()) as any[]
    expect(Array.isArray(cars)).toBe(true)
    expect(cars.every((car: any) => car.brand.toLowerCase() === 'tesla')).toBe(true)
  })

  it('GET /cars/qR1sT2 - should return car by UID', async () => {
    const res = await app.request('/cars/qR1sT2')
    expect(res.status).toBe(200)

    const car = (await res.json()) as any
    expect(car.uid).toBe('qR1sT2')
    expect(car.brand).toBe('Porsche')
  })

  it('GET /cars/nonExistentUid - should return 404 for non-existent UID', async () => {
    const res = await app.request('/cars/nonExistentUid')
    expect(res.status).toBe(404)

    const error = (await res.json()) as any
    expect(error.message).toBe('Car nonExistentUid not found')
  })

  it('POST /cars - should create a new car', async () => {
    const newCarData = {
      brand: "Polestar",
      model: "2",
      year: 2024,
      fuelType: "electric",
      color: "Midnight Blue"
    }

    const res = await app.request('/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCarData)
    })

    expect(res.status).toBe(201)
    const createdCar = (await res.json()) as any
    expect(createdCar.brand).toBe(newCarData.brand)
    expect(createdCar.model).toBe(newCarData.model)
    expect(createdCar.uid).toBeDefined()
    expect(createdCar.id).toBeDefined()
  })
})
