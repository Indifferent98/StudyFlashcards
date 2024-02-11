import React from 'react'
import { ReactSVG } from 'react-svg'

import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import settingIcon from '@/img/settings.svg'
import trashIcon from '@/img/trashIcon.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './SettingsDropDown.module.scss'

export const SettingsDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
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
