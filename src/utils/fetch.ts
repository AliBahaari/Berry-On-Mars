import axios from 'axios'

type fetchPropsType = {
  username?: string
  password?: string
}

export const fetch = async ({username='', password=''}: fetchPropsType) => {
  const { data: logInData } = await axios.post('http://localhost:3000/logIn', {
    username,
    password
  })
  const { data: filterItemsData } = await axios.get('http://localhost:3000/filterItems')

  return {
    logInData,
    filterItemsData,
  }
}
