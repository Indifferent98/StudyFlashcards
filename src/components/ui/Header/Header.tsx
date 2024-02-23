import headerLogo from '@/img/headerLogo.png'

import s from './Header.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <img alt={''} className={s.img} src={headerLogo} />
        <div className={s.signIn}>
          <Button
            children={<Typography children={'Sign In'} variant={'Subtitle2'} />}
            variant={'secondary'}
          />
        </div>
      </div>
    </div>
  )
}
