import axios from 'axios'

type fetchPropsType = {
  username?: string
  password?: string
}

export const fetch = async ({ username = '', password = '' }: fetchPropsType) => {
  const { data: logInData } = await axios.post('https://berry-on-mars.vercel.app/logIn', {
    username,
    password,
  })
  const { data: filterItemsData } = await axios.get('https://berry-on-mars.vercel.app/filterItems')

  return {
    logInData,
    filterItemsData,
  }
}
