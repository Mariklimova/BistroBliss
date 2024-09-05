import Header from '../../components/Header/Header';
import style from './about.module.scss';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import path from './assets/imgFamilyFood.svg'
import path2 from './assets/kitchen.svg'

export default function About() {
    const statisticArr = [
        { number: '3', value: "Locations" },
        { number: '1995', value: "Founded" },
        { number: '65+', value: "Staff Members" },
        { number: '100%', value: "Satisfied Customers" }
    ];

    return (
        <>
            <Header />
            <main className={style.visitcard_color}>
                <section className={style.visitcard}>
                    <div className={style.visitcard_wrapper}>
                        <Image className={style.img_visitcard} src= {path} alt = 'img' width={649} height={'auto'} />
                        <div className={style.visitcard_text}>
                            <h1>We provide healthy food for your family.</h1>
                            <h2>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city&apos;s rich culinary culture, we aim to honor our local roots while infusing a global palate.</h2>
                            <p>At Place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>
                    </div>
                </section>
            </main>
            <section className={style.statistic}>
                <div className={style.statistic_wrapper}>
                    <div className={style.statistic_text}>
                        <h1>A little information for our valuable guest</h1>
                        <p>At Place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                    <div className={style.statistic_block}>
                        {statisticArr.map((elem, index) =>
                            <div className={style.statistic_item} key={index}>
                                <h2>{elem.number}</h2>
                                <p>{elem.value}</p>
                            </div>
                        )}
                    </div>
                </div>
                <Image className={style.img_statistic} src= {path2} alt = 'img2' width={555} height={'auto'} />
                <div className={style.img_statistic} />
            </section>
            <Footer />
        </>
    );
}
