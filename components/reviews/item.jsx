import React from 'react';
import styles from "../../styles/news.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.newsRightText}>
            <p>{item.review}</p>
            <div className={styles.borderimg}>
                <img src={process.env.IMAGE_URL+item.avatar} alt='chi bana'/>
                <div className={styles.borderimgText}>
                    <h6>{item.author}</h6>
                </div>
            </div>
        </div>
    );
};

export default Item;