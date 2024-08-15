'use client'

import Header from '@/components/Header/Header';
import style from './menu.module.scss';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import ourMenuArr from '@/storage/storage';
import { useEffect, useState } from 'react';


export default function Menu() {

    const arrCategoryButtons = [
        { img_btn: 'img_all', count: 'All' },
        { img_btn: 'img_drinks', count: 'Lemonade' },
        { img_btn: 'img_mainFood', count: 'Main courses' },
        { img_btn: 'img_desserts', count: 'Dessert' }];

    const [activCategory, setActivCategory] = useState('All');
    const [food, setFood] = useState([]);

    useEffect(() => {
        if(activCategory=='All'){
            setFood(ourMenuArr);
            return;
        }
        const result = ourMenuArr.filter((el) => el.category == activCategory)
        setFood(result)
        console.log(result);
    }, [activCategory])

    return <>

        <Header />
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                <div className={style.buttons_wrapper}>

                    {arrCategoryButtons.map((el, i) =>
                        <button key={i} className={style.count_button} onClick={() => setActivCategory(el.count)}>
                            <div className={style.wrapper_img} >
                                <div className={style[el.img_btn]}></div>
                            </div>
                            <p className={style.count}>{el.count}</p>
                        </button>

                    )}
                </div>
            </div>
            <div className={style.container}>
                {food.map((elem, id) => <Link href={`/menu/${elem.id}`} key={id}>
                    <div className={style.item}>
                        <div className={style.text_container}>
                            <div className={style[elem.img]}></div>
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