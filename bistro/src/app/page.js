import Header from "./components/Header/Header";
import style from "./page.module.css";

export default function Home() {
  return <>
    <Header />
    <div className={style.color_main}>
      <main className={style.main}>
        <section className={style.backgraund_img}>
          <div className={style.title_text}>
            <h1>Best food for your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          </div>
          <div className={style.title_btns}>
            <button className={style.btn_book}>Book A Table</button>
            <button className={style.btn_menu}>Explore Menu</button>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  </>
}
