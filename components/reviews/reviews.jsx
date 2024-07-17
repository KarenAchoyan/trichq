import React from 'react';
import styles from "../../styles/news.module.css"
import Item from "./item";
import {t} from "../../utils/utils";

const Reviews = ({reviews}) => {
    return (
        <div className={styles.news}>
            <div>
                <div className={styles.newsText}>
                    <h4>{t("testimonials")}</h4>
                    <h2>{t("customers_feedback")}</h2>
                </div>
                <div className={styles.item}>
                    <img src='https://html.bdevs.net/tourigo-prv/assets/images/testimonial/testimonial-img-2.png'/>
                </div>
            </div>
            <div className={styles.newsRight}>
                {reviews?.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Reviews;