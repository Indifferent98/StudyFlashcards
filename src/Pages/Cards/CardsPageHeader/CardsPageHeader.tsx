import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import leftArrow from '@/img/leftBigArrow.svg'
import { useGetDeckByIdQuery } from '@/services/api'
import { useAppDispatch } from '@/services/hooks'
import { selectBackGroundDarkMode, selectCurrentModal } from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'

import s from '../Cards.module.scss'
import { DropDown } from '@/components/ui/DropDown'

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
        <Link style={{ padding: '0px 0px' }} to={'/'}>
          <div className={s.arrowStyle}>
            <ReactSVG src={leftArrow} style={{ display: 'inline-block' }} /> Back to deck list
          </div>
        </Link>
      </div>
      <div style={{ marginBottom: '70px' }}>
        <h1>
          {data?.name}
          {data?.userId === 'f2be95b9-4d07-4751-a775-bd612fc9553a' && (
            <span style={{ marginLeft: '15px' }}>
              <DropDown variant="Settings" />
            </span>
          )}
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
