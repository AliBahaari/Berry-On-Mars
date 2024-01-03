import LogInForm from '@/containers/LogInForm'

export default function Home() {
  return (
    <>
      <div className='mx-auto mt-20 flex max-w-[400px] flex-col gap-5'>
        <p className='text-5xl'>Log In</p>

        <LogInForm />
      </div>
    </>
  )
}
