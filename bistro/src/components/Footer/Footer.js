import style from './footer.module.scss'

export default function Footer() {

    return <footer>
        <div className={style.footer_color}>
            <div className={style.footer_wrapper}>

                <div className={style.col_left}>
                    <div className={style.footer_logo}>
                        <div className={style.white_logo}></div>
                        <h1>Bistro Bliss</h1>
                    </div>
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>

                <div className={style.col_center}></div>
            </div>
        </div>


    </footer>
}