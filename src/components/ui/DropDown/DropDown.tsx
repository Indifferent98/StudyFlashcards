import React from 'react'
import { ReactSVG } from 'react-svg'
import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import settingIcon from '@/img/settings.svg'
import trashIcon from '@/img/trashIcon.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import profileAvatar from '@/img/30142bfde5bdcdb7549cf75f7a51d100.png'
import personIcon from '@/img/personIcon.svg'
import logOutIcon from '@/img/logOutIcon.svg'
import s from './DropDown.module.scss'
import { Typography } from '../Typography'
type Props = { variant: 'Settings' | 'Profile'; nickName?: string; email?: string }
export const DropDown = ({
  variant,
  nickName = 'Ivan',
  email = 'LongTeeeestEmail@gmail.com',
}: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customize options'} className={s.IconButton}>
          {variant === 'Settings' ? (
            <ReactSVG src={settingIcon} />
          ) : (
            <img src={profileAvatar} alt="profileLogo" className={s.profileAvatar} />
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
                    src={profileAvatar}
                    alt="profileLogo"
                    className={`${s.profileAvatar} ${s.avatarItem}`}
                  />
                </div>
                <div className={s.profileInfoBlock}>
                  <Typography variant="Subtitle2" children={nickName} />
                  <Typography variant="Caption" color={'#808080'} children={email} />
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
                  <ReactSVG src={logOutIcon} className={s.logOutSvg} />
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
