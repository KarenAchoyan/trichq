import React, {useEffect} from 'react';
import styles from "../../styles/banner.module.css";
import Button from "../button/button";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img src={process.env.IMAGE_URL + item.image} alt=""/>
            <div className={styles.back}/>

            <div className={styles.overline}>
                <div className={styles.bannerItemText}>
                    <h4>WELCOME TOURIGO</h4>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <Button type={`blue`}>Knew me</Button>
                    <div className={styles.socials}>
                        <ul>
                            <li><FacebookOutlined/></li>
                            <li><InstagramOutlined/></li>
                            <li><YoutubeOutlined/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;