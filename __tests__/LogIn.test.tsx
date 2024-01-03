import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import LogInForm from '@/containers/LogInForm'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('LogIn', () => {
  it('Should Have Log In Text', () => {
    render(<LogInForm />)
    const logInText = screen.getByText('Log In')
    expect(logInText).toBeInTheDocument()
  })

  it('Should Change Page When Button Clicked', async () => {
    render(<LogInForm />)
    const logInButton = screen.getByTestId('logInButton')
    expect(logInButton).toBeInTheDocument()

    await userEvent.click(logInButton)
    expect(logInButton).toBeVisible()
  })
})
