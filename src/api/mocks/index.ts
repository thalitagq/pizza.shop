import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { singInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getCanceledMonthOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopuplarProductsMock } from './get-popular-products-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-maneged-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrdersDetailsMock } from './get-order-details-mock'
import { approveOrderMock } from './apporve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'

export const worker = setupWorker(
  singInMock, 
  registerRestaurantMock, 
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getCanceledMonthOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopuplarProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock
)


export async function enableMSW(){
  if(env.MODE !== 'test'){
    return
  }

  await worker.start()
}