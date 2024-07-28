'use client';
import Header from "./components/Header/Header";
import style from "./page.module.scss";

export default function Home() {

  const menuArr = [
    { icon: style.icon_breakfast, title: 'Breakfest', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { icon: style.icon_mainDishes, title: 'Main Dishes', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { icon: style.icon_drinks, title: 'Drinks', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { icon: style.icon_desserts, title: 'Desserts', text: 'In the new era of technology we look in the future with certainty and pride for our life.' }
  ];

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
        <div className={style.blockMeun_color}>
          <section className={style.menu_content}>
            <h1 className={style.menu_content_title}>Browse Our Menu</h1>
            <div className={style.menu_cards_wrapper}>

              {menuArr.map((el) =>
                <div className={style.menu_card}>
                  <div className={el.icon}></div>
                  <div className={style.menu_text}>
                    <h1>{el.title}</h1>
                    <p>{el.text}</p>
                  </div>
                  <a href="" className={style.link_card}>Explore Menu</a>
                </div>)}

            </div>
          </section>
        </div>

        <div className={style.services_color}>
          <section className={style.services}>
            <h1 className={style.services_title}>We also offer unique services for your events</h1>
            <div className={style.service_card}>
              <div className={style.img_birthdays}></div>
              <div className={style.service_text}>
                <h1>Birthdays</h1>
                <p>In the new era of technology we look in the future with certainty for life.</p>
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  </>
}
