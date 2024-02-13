import { http, HttpResponse } from 'msw'
import type { GetOrderDetailsResponse, GetOrderDetailsParams } from '../get-order-details'

export const getOrdersDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Eugene Thornton',
      email: 'luzec@fe.sd',
      phone: '(768) 953-3176'
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 2180,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: {
          name: 'Pizza 1'
        },
        quantity: 1
      },
      {
        id: 'order-item-2',
        priceInCents: 1180,
        product: {
          name: 'Pizza 2'
        },
        quantity: 2
      }
    ],
  })
})