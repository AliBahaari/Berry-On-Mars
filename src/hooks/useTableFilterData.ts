import axios from 'axios'
import { useQuery } from 'react-query'

export const useTableFilterData = () => {
  const { data: filterItemsData } = useQuery(['filterItems'], () =>
    axios.get('http://localhost:3000/filterItems').then((response) => response.data),
  )

  return {
    filterItemsData,
  }
}
