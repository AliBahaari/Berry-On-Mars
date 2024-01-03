'use client'

import InputField from '@/components/InputField'
import { Button } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { toastConfiguration } from '@/utils/toastConfiguration'

function LogInForm() {
  const router = useRouter()
  const [formValues, setFormValues] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: '',
  })
  const [formValuesErrors, setFormValuesErrors] = useState<{
    usernameError: boolean
    passwordError: boolean
  }>({
    usernameError: false,
    passwordError: false,
  })

  const handleFormSubmit = async () => {
    if (!formValues.username || !formValues.password) {
      toast.error('Username Or Password Is Empty', toastConfiguration)
      if (!formValues.username) {
        setFormValuesErrors({ ...formValuesErrors, usernameError: true })
      } else if (!formValues.password) {
        setFormValuesErrors({ ...formValuesErrors, passwordError: true })
      }
      return
    }
    const { data: logInResponse } = await axios.post('https://berry-on-mars.vercel.app/logIn', {
      ...formValues,
    })
    if (logInResponse?.status === 200) {
      router.push('/grid')
    } else {
      toast.error('Username Or Password Is Wrong', toastConfiguration)
    }
  }
  return (
    <>
      <InputField
        onChange={(usernameValue) => {
          setFormValues({ ...formValues, username: usernameValue })
          if (!usernameValue) {
            setFormValuesErrors({ ...formValuesErrors, usernameError: true })
          } else {
            setFormValuesErrors({ ...formValuesErrors, usernameError: false })
          }
        }}
        fieldName={'username'}
        label={'Username'}
        fieldType={'text'}
        placeholder={'Username'}
        error={formValuesErrors.usernameError}
      />
      <InputField
        onChange={(passwordValue) => {
          setFormValues({ ...formValues, password: passwordValue })
          if (!passwordValue) {
            setFormValuesErrors({ ...formValuesErrors, passwordError: true })
          } else {
            setFormValuesErrors({ ...formValuesErrors, passwordError: false })
          }
        }}
        fieldName={'password'}
        label={'Password'}
        fieldType={'password'}
        placeholder={'Password'}
        error={formValuesErrors.passwordError}
      />
      <Button color='info' variant='contained' onClick={handleFormSubmit} data-testid='logInButton'>
        Log In
      </Button>
    </>
  )
}

export default LogInForm
