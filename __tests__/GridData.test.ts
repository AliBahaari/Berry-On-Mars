import { initialData } from '@/utils/initialData'

describe('Grid Data', () => {
  it('Should Return The Correct Length Of Initial Data', () => {
    const labData = initialData

    expect(labData).toHaveLength(5)
  })
})
