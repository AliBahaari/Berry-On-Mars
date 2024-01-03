import {
  Table as Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Table, flexRender } from '@tanstack/react-table'

type CellsPropsType = {
  table: Table<{
    id: number
    setName: {
      title: string
      subTitle: string
      color: string
    }
    category: string
    address: string
    actions: string
  }>
}

function Cells({ table }: CellsPropsType) {
  return (
    <TableContainer>
      <Grid sx={{ minWidth: 700 }}>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Grid>
    </TableContainer>
  )
}

export default Cells
