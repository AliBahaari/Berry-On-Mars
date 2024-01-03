'use client'

import { Box, Grid } from '@mui/material'
import DropDown from '@/components/DropDown'
import { useTableFilterData } from '@/hooks/useTableFilterData'
import { useState } from 'react'
import { CellsData } from '@/containers/CellsData'
import { Toolbar } from '@/components/Toolbar'

function ProductsGrid() {
  const [filterType, setFilterType] = useState<number | undefined>(undefined)
  const { filterItemsData } = useTableFilterData()

  return (
    <Box p={5}>
      <p className='text-5xl'>Sets</p>

      <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={3}>
        <Toolbar />
      </Grid>

      <Grid
        p={3}
        borderTop={1}
        borderBottom={1}
        display={'flex'}
        mb={3}
        justifyContent={'flex-end'}
      >
        <DropDown
          sortType
          listItems={filterItemsData?.categoryItems}
          listLabel={'Category'}
          onChange={(value) => setFilterType(value)}
        />
      </Grid>

      <CellsData filterType={filterType} />
    </Box>
  )
}

export default ProductsGrid
