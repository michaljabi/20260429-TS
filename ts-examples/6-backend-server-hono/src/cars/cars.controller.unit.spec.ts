import { describe, expect, it, vi } from 'vitest'
import { app } from '../app.js'
import { carsService } from './cars.service.js'

vi.mock('./cars.service.js', () => ({
  carsService: {
    getAll: vi.fn(),
    getByUid: vi.fn(),
    create: vi.fn(),
  }
}))

describe('Cars API Unit Tests with mocks', () => {

  it('GET /cars - should return mocked cars', async () => {
    const mockedCars = [
        { id: 1, uid: 'mock-1', brand: 'Mocked', model: 'X', year: 2025, fuelType: 'electric' },
        { id: 2, uid: 'mock-2', brand: 'Mocked 2', model: 'Y', year: 2020, fuelType: 'diesel' }
    ]
    vi.mocked(carsService.getAll).mockReturnValue(mockedCars)

    const res = await app.request('/cars')
    expect(res.status).toBe(200)

    const cars = await res.json()
    expect(cars).toEqual(mockedCars)
    expect(carsService.getAll).toHaveBeenCalledWith(undefined)
  })

  it('GET /cars?brand=Tesla - should pass brand parameter to service', async () => {
    vi.mocked(carsService.getAll).mockReturnValue([])

    const res = await app.request('/cars?brand=Tesla')
    expect(res.status).toBe(200)
    expect(carsService.getAll).toHaveBeenCalledWith('Tesla')
  })

  it('GET /cars/:uid - should return mocked car by UID', async () => {
    const mockedCar = { id: 2, uid: 'mock-2', brand: 'Mocked 2', model: 'Y', year: 2025, fuelType: 'electric' }
    vi.mocked(carsService.getByUid).mockReturnValue(mockedCar)

    const res = await app.request('/cars/mock-2')
    expect(res.status).toBe(200)

    const car = await res.json()
    expect(car).toEqual(mockedCar)
    expect(carsService.getByUid).toHaveBeenCalledWith('mock-2')
  })

  it('GET /cars/:uid - should return 404 when service returns null', async () => {
    vi.mocked(carsService.getByUid).mockReturnValue(undefined)

    const res = await app.request('/cars/not-found')
    expect(res.status).toBe(404)

    const error = await res.json()
    expect(error.message).toBe('Car not-found not found')
  })

  it('POST /cars - should create new car via service', async () => {
    const newCarInput = { brand: 'New', model: 'Z' }
    const createdCar = { id: 3, uid: 'mock-3', ...newCarInput }
    vi.mocked(carsService.create).mockReturnValue(createdCar)

    const res = await app.request('/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCarInput)
    })

    expect(res.status).toBe(201)
    const car = await res.json()
    expect(car).toEqual(createdCar)
    expect(carsService.create).toHaveBeenCalledWith(newCarInput)
  })
})
