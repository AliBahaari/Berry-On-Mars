import axios from 'axios'
import { useQuery } from 'react-query'

export const useTableFilterData = () => {
  const { data: filterItemsData } = useQuery(['filterItems'], () =>
    axios.get('https://berry-on-mars.vercel.app/filterItems').then((response) => response.data),
  )

  return {
    filterItemsData,
  }
}
