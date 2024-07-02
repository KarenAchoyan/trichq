import React from 'react';
import {ArrowRightOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import styles from "../../styles/tours.module.css";
import Link from "next/link";


const Item = ({item}) => {
    return (
        <div className={styles.itemTour}>
            <Link href={'tours/'+item.id}>
                <div className={styles.avatar}>
                    <img
                        alt="example"
                        src={process.env.IMAGE_URL + item.avatar}
                    />
                    <div className={styles.price}>{item.price} AMD</div>
                </div>
            </Link>

            <div className={styles.title}>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
        ;
};

export default Item;