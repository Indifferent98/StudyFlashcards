import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './settingsDropDown.module.scss'
import settingIcon from '@/img/settings.svg'
import { ReactSVG } from 'react-svg'
import playIcon from '@/img/playCircleIcon.svg'
import editIcon from '@/img/editIcon.svg'
import trashIcon from '@/img/trashIcon.svg'

export const settingsDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <ReactSVG src={settingIcon} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.leftSlot}>
              <ReactSVG src={playIcon} />
            </div>
            Learn
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.leftSlot}>
              <ReactSVG src={editIcon} />{' '}
            </div>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.leftSlot}>
              <ReactSVG src={trashIcon} />
            </div>
            Delete
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
