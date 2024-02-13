import React from 'react'
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
type Props = { email?: string; nickName?: string; variant: 'Profile' | 'Settings' }
export const DropDown = ({
  email = 'LongTeeeestEmail@gmail.com',
  nickName = 'Ivan',
  variant,
}: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customize options'} className={s.IconButton}>
          {variant === 'Settings' ? (
            <ReactSVG src={settingIcon} />
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
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            {variant === 'Settings' ? (
              <>
                <div className={s.leftSlot}>
                  <ReactSVG src={playIcon} />
                </div>
                <span>Learn</span>
              </>
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
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            {variant === 'Settings' ? (
              <>
                <div className={s.leftSlot}>
                  <ReactSVG src={editIcon} />
                </div>
                <span>Edit</span>
              </>
            ) : (
              <>
                <div className={s.leftSlot}>
                  <ReactSVG src={personIcon} />
                </div>
                <span>My Profile</span>
              </>
            )}
          </DropdownMenu.Item>
          <DropdownMenu.Item className={`${s.DropdownMenuItem} ${s.DropdownMenuItemlastChild}`}>
            {variant === 'Settings' ? (
              <>
                <div className={s.leftSlot}>
                  <ReactSVG src={trashIcon} />
                </div>
                <span>Delete</span>
              </>
            ) : (
              <>
                <div className={s.leftSlot}>
                  <ReactSVG className={s.logOutSvg} src={logOutIcon} />
                </div>
                <span>Sign Out</span>
              </>
            )}
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
