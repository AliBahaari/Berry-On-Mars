import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Toolbar } from '@/components/Toolbar'

describe('Toolbar', () => {
  it('Should Be 2 Buttons There', () => {
    render(<Toolbar />)

    const active = screen.getByText('Active')
    const archived = screen.getByText('Archived')

    expect(active).toBeInTheDocument()
    expect(archived).toBeInTheDocument()
  })
})
