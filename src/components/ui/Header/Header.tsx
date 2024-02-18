import headerLogo from '@/img/headerLogo.png'
import s from './Header.module.scss'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <img className={s.img} src={headerLogo} alt="" />
        <div className={s.signIn}>
          <Button
            variant="secondary"
            children={<Typography variant="Subtitle2" children={'Sign In'} />}
          />
        </div>
      </div>
    </div>
  )
}
