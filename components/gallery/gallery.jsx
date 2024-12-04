import React, {useEffect} from 'react';
import styles from "../../styles/gallery.module.css"
import {Image} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getGalleries} from "../../store/gallery/actions";

const Gallery = () => {
    const galleries = useSelector(state => state.gallery.galleries);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGalleries.request());
    }, [dispatch]);
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                {galleries.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <Image src={process.env.IMAGE_URL+item.image} alt="" width={800} height={600} className={styles.img}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;