import { http, HttpResponse } from 'msw'
import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    email: 'email@exemple.com',
    id: '321849',
    name: 'Martin Grant',
    phone: '8989898898',
    role: 'manager',
    updatedAt: null
  })  
})