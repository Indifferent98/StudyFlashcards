import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { BackToListsButton } from '@/components/ui/BackToListsButton'
import { Button } from '@/components/ui/Button'
import { DropDown } from '@/components/ui/DropDown'
import { Modal } from '@/components/ui/Modal'
import leftArrow from '@/img/leftBigArrow.svg'
import { useGetDeckByIdQuery } from '@/services/api'
import { useAppDispatch } from '@/services/hooks'
import { selectBackGroundDarkMode, selectCurrentModal } from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'

import s from '../Cards.module.scss'

type Props = {
  id: string
}

export const CardsPageHeader = ({ id }: Props) => {
  const { data, isLoading } = useGetDeckByIdQuery({ id })
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction
  const backGroundDarkMode = useSelector(selectBackGroundDarkMode)
  const currentModal = useSelector(selectCurrentModal)

  return (
    <>
      {backGroundDarkMode && (
        <>
          <div className={s.background}></div> <Modal variant={currentModal} />
        </>
      )}
      <div>
        <BackToListsButton url={'/'} variant={'decks'} />
      </div>
      <div style={{ marginBottom: '70px' }}>
        <h1>
          {data?.name}
          {
            <span style={{ marginLeft: '15px' }}>
              <DropDown
                deckId={id}
                fullSetting={data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a'}
                variant={'Settings'}
              />
            </span>
          }
        </h1>
        {data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a' && (
          <div style={{ display: 'inline-block', float: 'right' }}>
            <Button
              onClick={() => {
                dispatch(changeBackGroundDarkMode({ mode: true }))
                dispatch(changeCurrentModal({ variant: 'Add new card' }))
              }}
            >
              Add new card
            </Button>
          </div>
        )}

        {data?.cover && <img src={data.cover} style={{ height: '107px', width: '170px' }} />}
      </div>
    </>
  )
}
