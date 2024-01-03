import { fetch } from '@/utils/fetch'

describe('Log In Endpoint', () => {
  it('Should Return 400 For Incorrent Authentication Credentials', async () => {
    const { logInData } = await fetch({
      username: 'Admin',
      password: '9876',
    })

    expect(logInData.status).not.toBe(200)
  })
})
