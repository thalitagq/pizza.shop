import { http, HttpResponse } from 'msw'
import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>('/managed-restaurant', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    description: 'Restautrant',
    id: 'restaurant-id',
    managerId: 'manager-id',
    name: 'Pizza Shop',
    updatedAt: null
  })
})