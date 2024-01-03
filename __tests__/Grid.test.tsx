import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { CellsData } from '@/containers/CellsData'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Grid', () => {
  it('New Set Modal Should Be Shown When The Button Is Clicked', async () => {
    render(<CellsData filterType={undefined} />)

    const newSetButton = screen.getByTestId('newSetButton')
    await userEvent.click(newSetButton)
    const newSetModal = screen.getByTestId('newSetModal')
    expect(newSetModal).toBeVisible()
  })
})
