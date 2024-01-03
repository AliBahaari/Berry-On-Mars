import { Menu, MenuItem, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import { ExpandMore, ExpandLess } from '@mui/icons-material'

type DropDownProps = {
  sortType?: boolean
  listItems: { title: string; value: number }[]
  listLabel: string
  onChange: (value: number) => void
}

const DropDown = ({ sortType = false, listItems = [], listLabel, onChange }: DropDownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)

  return (
    <>
      <Grid
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={1}
        border={sortType ? 1 : 0}
        borderRadius={10}
        px={2}
        py={0.5}
        onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Typography variant='subtitle1'>
          {`${listLabel}:  ${
            listItems?.find((item) => item?.value === selectedIndex)?.title || 'Not Selected'
          }`}
        </Typography>
        {Boolean(anchorEl) ? <ExpandLess /> : <ExpandMore />}
      </Grid>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {listItems.map((item) => (
          <MenuItem
            key={item?.value}
            selected={item?.value === selectedIndex}
            onClick={() => {
              setSelectedIndex(item?.value)
              onChange(item?.value)
              setAnchorEl(null)
            }}
          >
            {item?.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default DropDown
