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
                    <p>Total:{data.price}</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
}