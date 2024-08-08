'use client'

import Header from '@/components/Header/Header'
import style from './id.module.scss'
import Footer from '@/components/Footer/Footer';
import { useParams } from 'next/navigation';
import storage from '../../../storage/storage';
import { useEffect, useState } from 'react';


export default function Id() {
    const { id } = useParams();
    const [data, setData] = useState({});

    console.log(data);
    useEffect(() => {
        const resultItem = storage.filter((el) => el.id == id);
        setData(resultItem[0])
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

                        <button className={style.count_button}>

                            <p className={style.size}>S</p>
                            <p className={style.count}>1s</p>
                        </button>

                        <button className={style.count_button}>

                            <p className={style.size}>M</p>
                            <p className={style.count}>2s</p>
                        </button>

                        <button className={style.count_button}>

                            <p className={style.size}>L</p>
                            <p className={style.count}>3s</p>
                        </button>

                        <button className={style.count_button}>

                            <p className={style.size}>XL</p>
                            <p className={style.count}>4s</p>
                        </button>

                    </div>

                    <div className={style.total}>
                        <div className={style.price}>
                            <p>Total:</p>
                            <p>{data.price}</p>
                        </div>

                        <div className={style.line}></div>
                        <div className={style.text_description}>
                            <div className={style.img_info}></div>
                            <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                        </div>
                        <button className={style.add}>Add to Order</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>

}


// {['S','M','L','XL'].map((el)=><div className={style.count}>
//
//     <p>{el}</p>
//{['1s','2s','3s','4s'].map((elem)=><p className={style.count_text}>{elem}</p>)}
// </div>)}