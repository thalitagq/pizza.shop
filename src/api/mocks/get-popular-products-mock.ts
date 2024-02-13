import { http, HttpResponse } from 'msw'
import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopuplarProductsMock = http.get<never, never, GetPopularProductsResponse>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 48 },
    { product: 'Pizza 02', amount: 84 },
    { product: 'Pizza 03', amount: 61 },
    { product: 'Pizza 04', amount: 24 },
    { product: 'Pizza 05', amount: 37 },
  ])
})