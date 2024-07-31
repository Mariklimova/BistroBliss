import Header from '@/components/Header/Header';
import style from './menu.module.scss';
import Footer from '@/components/Footer/Footer';

export default function Menu() {

    const ourMenuArr = [
        {img: style.img_egg, price: "$ 9.99", title: "Fried Eggs", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_pizza, price: "$ 15.99", title: "Hawaiian Pizza", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_cocktail, price: "$ 7.25", title: "Martinez Cocktail", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_cake, price: "$ 20.99", title: "Butterscotch Cake", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_lemonade, price: "$ 5.89", title: "Mint Lemonade", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_icecream, price: "$ 18.05", title: "Chocolate Icecream", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_burger, price: "$ 12.55", title: "Cheese Burger", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
        {img: style.img_waffles, price: "$ 12.99", title: "Classic Waffles", description: "Made with eggs, lettuce, salt, oil and other ingredients."},
    ];

    return <>

        <Header/>
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className={style.container}>
                {ourMenuArr.map((elem, index) => 
                    <div className={style.item} key ={index}>
                        <div className={elem.img}></div>
                        <div className={style.text_container}>
                            <p className={style.price}>{elem.price}</p>
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                        </div>

                    </div>
                )}
            </div>
        </div>
        <Footer/>
    </>
}