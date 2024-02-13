import { http, HttpResponse } from 'msw'
import { UpdateProfileBody } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>('/profile', async ({ request }) => {
  const { description, name } = await request.json()

  if (name === 'Pizzaria') {
    return new HttpResponse(null, {
      status: 204,
    })
  }

  return new HttpResponse(null, { status: 400 })
})