import Link from 'next/link'
import style from './header.module.scss'

export default function Header() {
    return <header>
        <div className={style.grey_container}>
            <div className={style.wrapper}>
                    <div className={style.messengers}>
                        <div className={style.phone}>
                            <div className={style.imgPhone}></div>
                            <p>(414) 857 - 0107</p>
                        </div>
                        <div className={style.mail}>
                            <div className={style.imgMail}></div>
                            <a href=''>yummy@bistrobliss</a>
                        </div>
                    </div>
                    <div className={style.icons}>
                        <div className={style.iconBlock}>
                            <div className={style.twit}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.face}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.inst}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.git}></div>
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.white_container}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <div className={style.food}></div>
                    <h1>Bistro Bliss</h1>
                </div>
                <nav className={style.navig_btn}>
                    <p><Link href={'/'}>Home</Link></p>
                    <p><Link href={'/about'}>About</Link></p>
                    <p><Link href={'/menu'}>Menu</Link></p>
                </nav>
                <Link href={'/basket'}><button className={style.btn_book}>Basket</button></Link>
            </div>

        </div>
    </header>
}

