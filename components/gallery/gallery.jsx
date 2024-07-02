import React from 'react';
import  styles from "../../styles/gallery.module.css"
import {Image} from "antd";
const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
                <div className={styles.item}>
                    <Image src="/blog-image-13.png" alt="" width={370} height={370} className={styles.img} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;