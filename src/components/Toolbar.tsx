import { Button, ButtonGroup, buttonBaseClasses } from '@mui/material'
import { useMemo, useState } from 'react'

enum SetStatusEnum {
  Active = 'Active',
  Archived = 'Archived',
}

export const Toolbar = () => {
  const [setStatus, setSetStatus] = useState<SetStatusEnum>(SetStatusEnum.Active)

  const {
    activeButtonBackground,
    archivedButtonBackground,
    activeButtonWhiteColor,
    archivedButtonWhiteColor,
  } = useMemo(() => {
    const activeButtonBackground = setStatus === SetStatusEnum.Active ? 'common.black' : 'unset'
    const archivedButtonBackground = setStatus === SetStatusEnum.Archived ? 'common.black' : 'unset'
    const activeButtonWhiteColor = setStatus === SetStatusEnum.Active ? 'common.white' : 'unset'
    const archivedButtonWhiteColor = setStatus === SetStatusEnum.Archived ? 'common.white' : 'unset'

    return {
      activeButtonBackground,
      archivedButtonBackground,
      activeButtonWhiteColor,
      archivedButtonWhiteColor,
    }
  }, [setStatus])

  return (
    <>
      <ButtonGroup
        variant='outlined'
        sx={{
          [`& > button`]: {
            borderRadius: 10,
          },
        }}
        onClick={(event) => {
          if ((event.target as HTMLButtonElement).innerText === SetStatusEnum.Active) {
            setSetStatus(SetStatusEnum.Active)
          } else {
            setSetStatus(SetStatusEnum.Archived)
          }
        }}
      >
        <Button
          sx={{
            backgroundColor: activeButtonBackground,
            color: activeButtonWhiteColor,
            [`&.${buttonBaseClasses.root}:hover`]: {
              color: activeButtonBackground,
            },
          }}
        >
          Active
        </Button>
        <Button
          sx={{
            backgroundColor: archivedButtonBackground,
            color: archivedButtonWhiteColor,
            [`&.${buttonBaseClasses.root}:hover`]: {
              color: archivedButtonBackground,
            },
          }}
        >
          Archived
        </Button>
      </ButtonGroup>
    </>
  )
}
