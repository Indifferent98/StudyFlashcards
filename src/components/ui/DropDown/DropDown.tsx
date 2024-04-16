import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import profileAvatar from '@/img/30142bfde5bdcdb7549cf75f7a51d100.png'
import editIcon from '@/img/editIcon.svg'
import logOutIcon from '@/img/logOutIcon.svg'
import personIcon from '@/img/personIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import settingIcon from '@/img/settings.svg'
import trashIcon from '@/img/trashIcon.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDown.module.scss'

import { Typography } from '../Typography'

type Props = {
  deckId: string
  email?: string
  fullSetting: boolean
  nickName?: string
  variant: 'Profile' | 'Settings'
}
export const DropDown = ({
  deckId,
  email = 'LongTeeeestEmail@gmail.com',
  fullSetting,
  nickName = 'Ivan',
  variant,
}: Props) => {
  const navigate = useNavigate()
  const fullSettingVariant = variant === 'Settings' && fullSetting

  console.log(fullSettingVariant)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customize options'} className={s.IconButton}>
          {variant === 'Settings' ? (
            <ReactSVG src={settingIcon} style={{ position: 'relative', top: '-4px' }} />
          ) : (
            <img alt={'profileLogo'} className={s.profileAvatar} src={profileAvatar} />
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${s.DropdownMenuContent} ${
            variant === 'Profile' && s.ProfileDropdownMenuContent
          }`}
          sideOffset={5}
        >
          <DropdownMenu.Item
            className={s.DropdownMenuItem}
            onClick={() => {
              navigate(`/learn/${deckId}`)
            }}
            style={{ cursor: 'pointer' }}
          >
            {variant === 'Settings' ? (
              <div
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  flex: '1',
                }}
              >
                <span className={s.leftSlot}>
                  <ReactSVG src={playIcon} />
                </span>
                <>Learn</>
              </div>
            ) : (
              <div className={s.profileDropDownItem}>
                <div className={s.leftSlot}>
                  <img
                    alt={'profileLogo'}
                    className={`${s.profileAvatar} ${s.avatarItem}`}
                    src={profileAvatar}
                  />
                </div>
                <div className={s.profileInfoBlock}>
                  <Typography children={nickName} variant={'Subtitle2'} />
                  <Typography children={email} color={'#808080'} variant={'Caption'} />
                </div>
              </div>
            )}
          </DropdownMenu.Item>
          {fullSettingVariant && (
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <div className={s.leftSlot}>
                <ReactSVG src={editIcon} />
              </div>
              <span>Edit</span>
            </DropdownMenu.Item>
          )}
          {variant === 'Profile' && (
            <DropdownMenu.Item className={s.DropdownMenuItem}>
              <div className={s.leftSlot}>
                <ReactSVG src={personIcon} />
              </div>
              <span>My Profile</span>
            </DropdownMenu.Item>
          )}

          {fullSettingVariant && (
            <DropdownMenu.Item className={`${s.DropdownMenuItem} ${s.DropdownMenuItemlastChild}`}>
              <div className={s.leftSlot}>
                <ReactSVG src={trashIcon} />
              </div>
              <span>Delete</span>
            </DropdownMenu.Item>
          )}
          {variant === 'Profile' && (
            <DropdownMenu.Item className={`${s.DropdownMenuItem} ${s.DropdownMenuItemlastChild}`}>
              <div className={s.leftSlot}>
                <ReactSVG className={s.logOutSvg} src={logOutIcon} />
              </div>
              <span>Sign Out</span>
            </DropdownMenu.Item>
          )}
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
