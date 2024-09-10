'use client'

import Header from '@/components/Header/Header'
import style from './id.module.scss'
import Footer from '@/components/Footer/Footer';
import { useParams } from 'next/navigation';
import storage from '../../../storage/storage';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Id() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [totalPrice, setTotalPrice] = useState('');
   

    const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem('basketArr')) || []);



    const addToBasket = () => {
        const checkItems = basketItems.filter((elem) => elem.id !== data.id);
        const basket = [...checkItems, { ...data, price: totalPrice }];
        localStorage.setItem('basketArr', JSON.stringify(basket));
    }


    const [arrSizeFood, setArrSizeFood] = useState([{ size: 'S', count: '1s', priceIndex: 1, isActive: true },
    { size: 'M', count: '2s', priceIndex: 2, isActive: false },
    { size: 'L', count: '3s', priceIndex: 2.5, isActive: false },
    { size: 'XL', count: '4s', priceIndex: 3, isActive: false }]);


    useEffect(() => {
        const resultItem = storage.filter((el) => el.id == id);
        setData(resultItem[0])
        setTotalPrice(resultItem[0].price)
    }, [id]);



    return <>
        <Header />
        <div className={style.wrrapper_color}>
            <div className={style.wrrapper_item}>
                <div className={style[data.img]}></div>
                <div className={style.text_item}>
                    <h1>{data.title}</h1>
                    <h2>{data.description}</h2>
                    <p>Size</p>

                    <div className={style.buttons_wrapper}>

                        {arrSizeFood.map((el, i) =>
                            <button key={i} className={`${style.count_button} ${el.isActive ? `${style.active}` : ''}`} onClick={() => {
                                setTotalPrice((parseFloat(data.price) * el.priceIndex).toFixed(2));
                                setArrSizeFood((prev) => prev.map((item) => item.size === el.size ? { ...item, isActive: true } : { ...item, isActive: false }));
                            }}>

                                <p className={style.size}>{el.size}</p>
                                <p className={style.count}>{el.count}</p>
                            </button>
                        )}


                    </div>

                    <div className={style.total}>
                        <div className={style.price}>
                            <p>Total:</p>
                            <p>{totalPrice} $</p>
                        </div>

                        <div className={style.line}></div>
                        <div className={style.text_description}>
                            <div className={style.img_info}></div>
                            <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                        </div>
                        <button className={style.add} onClick={addToBasket}>Add to Order</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>

}



