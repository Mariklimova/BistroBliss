'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import style from './basket.module.scss'

export default function Basket() {
    const [basketFood, setBasketFood] = useState([]);

    const getBasketItems = () => {
        setBasketFood(JSON.parse(localStorage.getItem('basketArr')));
    }

    useEffect(() => {
        getBasketItems()
    }, []);

    const deleteBasketItems = (elem) => {
        const delItems = basketFood.filter((el) => el.id !== elem.id);
        localStorage.setItem('basketArr',JSON.stringify([...delItems,elem]));
        setBasketFood([...delItems])
    }

    return <>
        <Header />
        <h1 className={style.title_basket}>Basket</h1>
        <div className={style.container}>
            {basketFood.map((elem, i) =>
                <div key={i} className={style.item} onClick={()=>deleteBasketItems(elem)}>
                    <div className={style[elem.img]}></div>
                    <div className={style.text_container}>
                        <p className={style.price}>{elem.price}</p>
                        <h2>{elem.title}</h2>
                        <p>{elem.description}</p>

                        <button className={style.btn_delete}>Delete</button>
                    </div>

                </div>

            )}
        </div>
        <Footer />
    </>
}