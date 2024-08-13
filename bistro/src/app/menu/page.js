'use client'

import Header from '@/components/Header/Header';
import style from './menu.module.scss';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import ourMenuArr from '@/storage/storage';
import { useEffect, useState } from 'react';


export default function Menu() {

    const arrSizeFood2 = [
        { img_style: style.img_drinks, count: 'Lemonade' },
        { img_style: style.img_mainFood, count: 'Main courses' },
        { img_style: style.img_desserts, count: 'Dessert' }];

    const [activCategory, setActivCategory] = useState('Lemonade');
    const [food, setFood] = useState([]);

    useEffect(() => {
        const result = ourMenuArr.filter((el) => el.category == activCategory)
        setFood(result)
        console.log(result);
    }, [activCategory])

    return <>

        <Header />
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <div className={style.buttons_wrapper}>

                    {arrSizeFood2.map((el,i) =>
                        <button key={i} className={style.count_button} onClick={()=>setActivCategory(el.count)}>

                            <div className={el.img_style}></div>
                            <p className={style.count}>{el.count}</p>
                        </button>

                    )}
                </div>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className={style.container}>
                {food.map((elem, id) => <Link href={`/menu/${elem.id}`} key={id}>
                    <div className={style.item}>
                        <div className={style[elem.img]}></div>
                        <div className={style.text_container}>
                            <p className={style.price}>{elem.price}</p>
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                        </div>

                    </div>
                </Link>
                )}
            </div>
        </div>
        <Footer />
    </>
}