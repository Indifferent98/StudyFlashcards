import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { BackToListsButton } from '@/components/ui/BackToListsButton'
import { Button } from '@/components/ui/Button'
import { DropDown } from '@/components/ui/DropDown'
import { Modal } from '@/components/ui/Modal'
import leftArrow from '@/img/leftBigArrow.svg'
import { useGetCardsByIdQuery, useGetDeckByIdQuery } from '@/services/api'
import { useAppDispatch } from '@/services/hooks'
import { selectBackGroundDarkMode, selectCurrentModal } from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'
import style from './CardsPageHeader.module.scss'
import s from '../Cards.module.scss'
import { useEffect } from 'react'

type Props = {
  id: string
}

export const CardsPageHeader = ({ id }: Props) => {
  const { data, isLoading, refetch } = useGetDeckByIdQuery({ id })
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction
  const backGroundDarkMode = useSelector(selectBackGroundDarkMode)
  const currentModal = useSelector(selectCurrentModal)
  const navigate = useNavigate()

  useEffect(() => {
    refetch()
  }, [backGroundDarkMode])

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

      <div className={style.content1}>
        <div className={style.header}>
          <h1 style={{ display: 'inline-block' }}>
            {data?.name}
            {data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a' && (
              <span className={style.content2}>
                <DropDown
                  deckId={id}
                  fullSetting={data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a'}
                  variant={'Settings'}
                />
              </span>
            )}
          </h1>

          <div>
            <Button
              disabled={data?.cardsCount === 0}
              onClick={() => {
                if (data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a') {
                  dispatch(changeBackGroundDarkMode({ mode: true }))
                  dispatch(changeCurrentModal({ variant: 'Add new card' }))
                } else {
                  navigate(`/learn/${id}`)
                }
              }}
            >
              {data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a'
                ? `Add new card`
                : 'Learn to pack'}
            </Button>
          </div>
        </div>
        {data?.cover && <img src={data.cover} style={{ height: '107px', width: '170px' }} />}
      </div>
    </>
  )
}
