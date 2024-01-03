import { fetch } from '@/utils/fetch'

describe('Log In Endpoint', () => {
  it('sss', async () => {
    const { filterItemsData } = await fetch({})

    expect(filterItemsData.categoryItems).toHaveLength(5)
  })
})
