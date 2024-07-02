import React from 'react';
import styles from "../../styles/news.module.css"
import Item from "./item";

const Reviews = ({reviews}) => {
    return (
        <div className={styles.news}>
            <div>
                <div className={styles.newsText}>
                    <h4>TESTIMONIALS</h4>
                    <h2>Customers Feedback</h2>
                </div>
                <div className={styles.item}>
                    <img src='https://html.bdevs.net/tourigo-prv/assets/images/testimonial/testimonial-img-2.png'
                         alt='chi bana'/>
                </div>
            </div>
            <div className={styles.newsRight}>
                {reviews.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Reviews;