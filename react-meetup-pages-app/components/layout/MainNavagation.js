import Link from "next/link"
import classes from './MainNavagation.module.css'

const MainNavagation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            모임 사이트
        </div>
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>
                        모든 모임
                    </Link>
                </li>
                <li>
                    <Link href={'/new-meetup'}>
                        새로운 모임 추가
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavagation