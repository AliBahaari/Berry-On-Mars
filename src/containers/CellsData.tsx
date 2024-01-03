import { Button, Box, Modal, Grid, IconButton, Typography } from '@mui/material'
import { Add, Close } from '@mui/icons-material'
import { useEffect, useMemo, useState } from 'react'
import InputField from '@/components/InputField'
import { Delete, Edit } from '@mui/icons-material'
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { SetType } from '../types/DataGridTypes'
import { toast } from 'react-toastify'
import { toastConfiguration } from '@/utils/toastConfiguration'
import Cells from './Cells'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
}

type DataGridPropsType = {
  filterType: number | undefined
}

const columnHelper = createColumnHelper<SetType>()

export const CellsData = ({ filterType }: DataGridPropsType) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [editId, setEditId] = useState<number | undefined>(undefined)
  const [formValues, setFormValues] = useState<{
    title: string
    subTitle: string
    color: string
    category: string
    address: string
  }>({
    title: '',
    subTitle: '',
    color: '',
    category: '',
    address: '',
  })

  const [tableData, setTableData] = useState([
    {
      id: 1,
      setName: {
        title: 'Clothes',
        subTitle: 'Lorem Ipsum',
        color: '#EDB6A3',
      },
      category: 'Clothes',
      address: 'No. 608, Azadi Blvd., Mashhad',
      actions: '',
    },
    {
      id: 2,
      setName: {
        title: 'Shoes',
        subTitle: 'Lorem Ipsum',
        color: '#B3DEE2',
      },
      category: 'Shoes',
      address: 'No. 608, Azadi Blvd., Tehran',
      actions: '',
    },
    {
      id: 3,
      setName: {
        title: 'Shoes',
        subTitle: 'Lorem Ipsum',
        color: '#0099FF',
      },
      category: 'Shoes',
      address: 'No. 608, Azadi Blvd., Tehran',
      actions: '',
    },
    {
      id: 4,
      setName: {
        title: 'Sunglasses',
        subTitle: 'Lorem Ipsum',
        color: '#623CEA',
      },
      category: 'Sunglasses',
      address: 'No. 608, Azadi Blvd., Tabriz',
      actions: '',
    },
    {
      id: 5,
      setName: {
        title: 'Blouse',
        subTitle: 'Lorem Ipsum',
        color: '#BAD4AA',
      },
      category: 'Blouse',
      address: 'No. 608, Azadi Blvd., Tehran',
      actions: '',
    },
  ])

  const handleRowCreate = () => {
    if (
      !formValues.title ||
      !formValues.subTitle ||
      !formValues.color ||
      !formValues.category ||
      !formValues.address
    ) {
      toast.error('All The Field Should Be Filled!', toastConfiguration)
      return
    }
    setOpenModal(false)
    const tableNewData = [
      ...tableData,
      {
        id: Math.floor(Math.random() * 100),
        setName: {
          title: formValues.title,
          subTitle: formValues.subTitle,
          color: formValues.color,
        },
        category: formValues.category,
        address: formValues.address,
        actions: '',
      },
    ]

    setTableData(tableNewData)
    setFormValues({
      title: '',
      subTitle: '',
      color: '',
      category: '',
      address: '',
    })
    toast.success('Successfully Added!', toastConfiguration)
  }

  const filteredData = useMemo(() => {
    if (filterType) {
      switch (filterType) {
        case 0:
          return tableData
        case 1:
          return tableData.filter((item) => item.category === 'Clothes')
        case 2:
          return tableData.filter((item) => item.category === 'Shoes')
        case 3:
          return tableData.filter((item) => item.category === 'Sunglasses')
        case 4:
          return tableData.filter((item) => item.category === 'Blouse')
      }
    }
  }, [filterType, tableData])

  const handleRowDelete = (id: number) => {
    if (![...tableData].find((item) => item?.id === id)) {
      toast.error('ID Not Found!', toastConfiguration)
      return
    }
    const tableNewData = [...tableData].filter((item) => item?.id !== id)
    setTableData(tableNewData)
    toast.success('Successfully Deleted!', toastConfiguration)
  }

  useEffect(() => {
    if (editId) {
      setOpenModal(true)
      const editRowValues = [...tableData].find((item) => item?.id === editId)
      setFormValues({
        title: editRowValues?.setName.title || '',
        subTitle: editRowValues?.setName.subTitle || '',
        color: editRowValues?.setName.color || '',
        category: editRowValues?.category || '',
        address: editRowValues?.address || '',
      })
    }
  }, [editId, tableData])

  const handleRowEdit = () => {
    if (
      !formValues.title ||
      !formValues.subTitle ||
      !formValues.color ||
      !formValues.category ||
      !formValues.address
    ) {
      toast.error('All The Field Should Be Filled!', toastConfiguration)
      return
    }
    const editRowValues = [...tableData].find((item) => item?.id === editId)
    if (editRowValues) {
      editRowValues.setName.title = formValues.title
      editRowValues.setName.subTitle = formValues.subTitle
      editRowValues.setName.color = formValues.color
      editRowValues.category = formValues.category
      editRowValues.address = formValues.address
      const tableNewData = [...tableData].filter((item) => item?.id !== editId)
      tableNewData.unshift(editRowValues)
      setTableData(tableNewData)

      setFormValues({
        title: '',
        subTitle: '',
        color: '',
        category: '',
        address: '',
      })
      setEditId(undefined)
      setOpenModal(false)
      toast.success('Successfully Edited!', toastConfiguration)
    } else {
      toast.error('ID Not Found!', toastConfiguration)
    }
  }

  const columns = [
    columnHelper.accessor('setName', {
      header: () => (
        <Typography variant='subtitle1' color={'primary.light'}>
          Set name
        </Typography>
      ),
      cell: (props) => (
        <Grid display={'flex'} alignItems={'center'} gap={2}>
          <Box
            sx={{
              width: 14,
              height: 8,
              backgroundColor: props.getValue()?.color,
            }}
          ></Box>
          <Box>
            <Typography>{props.getValue()?.title}</Typography>
            <Typography variant='body2' color={'primary.light'}>
              {props.getValue()?.subTitle}
            </Typography>
          </Box>
        </Grid>
      ),
    }),
    columnHelper.accessor('category', {
      header: () => (
        <Typography variant='subtitle1' color={'primary.light'}>
          Category
        </Typography>
      ),
      cell: (props) => <Typography>{props.getValue()}</Typography>,
    }),
    columnHelper.accessor('address', {
      header: () => (
        <Typography variant='subtitle1' color={'primary.light'}>
          Address
        </Typography>
      ),
      cell: (props) => <Typography>{props.getValue()}</Typography>,
    }),
    columnHelper.accessor('actions', {
      header: () => (
        <Typography variant='subtitle1' color={'primary.light'}>
          Actions
        </Typography>
      ),
      cell: ({ row }) => {
        return (
          <Grid display={'flex'} gap={1} alignItems={'center'}>
            <IconButton onClick={() => handleRowDelete(row.original.id)}>
              <Delete />
            </IconButton>
            <IconButton onClick={() => setEditId(row.original.id)}>
              <Edit />
            </IconButton>
          </Grid>
        )
      },
    }),
  ]

  const table = useReactTable({
    data: filterType ? filteredData! : tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <Button
        data-testid='newSetButton'
        variant='contained'
        endIcon={<Add />}
        size='small'
        color={'secondary'}
        sx={{ borderRadius: 20, px: 3, py: 1, my: 3 }}
        onClick={() => {
          setFormValues({
            title: '',
            subTitle: '',
            color: '',
            category: '',
            address: '',
          })
          setOpenModal(true)
        }}
      >
        New set
      </Button>

      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          setEditId(undefined)
          setFormValues({
            title: '',
            subTitle: '',
            color: '',
            category: '',
            address: '',
          })
        }}
        data-testid='newSetModal'
      >
        <Box sx={modalStyle}>
          <Grid display={'flex'} justifyContent={'flex-end'} mb={1}>
            <IconButton
              onClick={() => {
                setOpenModal(false)
                setEditId(undefined)
              }}
            >
              <Close />
            </IconButton>
          </Grid>
          <div className='mt-8 flex flex-col gap-5'>
            <InputField
              onChange={(titleValue) => setFormValues({ ...formValues, title: titleValue })}
              fieldName={'title'}
              label={'Title'}
              fieldType={'text'}
              placeholder={'Title'}
              value={formValues.title}
            />
            <InputField
              onChange={(subTitleValue) =>
                setFormValues({ ...formValues, subTitle: subTitleValue })
              }
              fieldName={'subTitle'}
              label={'Sub Title'}
              fieldType={'text'}
              placeholder={'Sub Title'}
              value={formValues.subTitle}
            />
            <InputField
              onChange={(colorValue) => setFormValues({ ...formValues, color: colorValue })}
              fieldName={'color'}
              label={'Color'}
              fieldType={'text'}
              placeholder={'Color'}
              value={formValues.color}
              helperText="Write a Color Name Like 'Red' or HEX Code Like '#0099FF'"
            />
            <InputField
              onChange={(categoryValue) =>
                setFormValues({ ...formValues, category: categoryValue })
              }
              fieldName={'category'}
              label={'Category'}
              fieldType={'text'}
              placeholder={'Category'}
              value={formValues.category}
              helperText="If You Write 'Clothes', 'Shoes', 'Sunglasses' or 'Blouse', It Would Be Shown When Using Filters"
            />
            <InputField
              onChange={(addressValue) => setFormValues({ ...formValues, address: addressValue })}
              fieldName={'address'}
              label={'Address'}
              fieldType={'text'}
              placeholder={'Address'}
              value={formValues.address}
            />
            <Button
              variant='contained'
              color='info'
              onClick={() => {
                editId ? handleRowEdit() : handleRowCreate()
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>

      <Cells table={table} />
    </>
  )
}
