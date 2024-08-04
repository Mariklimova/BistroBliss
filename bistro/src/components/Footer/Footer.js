import style from './footer.module.scss'

export default function Footer() {

    return <footer>
        <div className={style.footer_color}>
            <div className={style.footer_wrapper}>

                <div className={style.column_left}>
                    <div className={style.footer_logo}>
                        <div className={style.white_logo}></div>
                        <h1>Bistro Bliss</h1>
                    </div>
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>

                <div className={style.column_center}>
                    <div className={style.column_center_text}>
                        <h2>Pages</h2>
                        {['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'].map((el, i) => <p key={i}>{el}</p>)}
                    </div>
                    <div className={style.column_center_text}>
                        <h2>Utility Pages</h2>
                        {['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'].map((el, i) =>
                            <p key={i}>{el}</p>)}
                    </div>
                </div>

                <div className={style.column_right}>
                    <h2>Follow Us On Instagram</h2>
                    <div className={style.images}>

                        {[style.img1, style.img2, style.img3, style.img4].map((elem, index) =>
                            <div key={index} className={elem}></div>)}
                    </div>
                </div>
            </div>

                <div className={style.line}></div>
                <p className={style.hashtag}>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>


    </footer >
}