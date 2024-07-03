import React from 'react';
import BlogItem from "../../components/blog/blogItem";
import styles from "../../styles/blog.module.css"
import Button from "../button/button";
import Link from "next/link";

const Blog = ({blogs}) => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.blogContainerText}>
                <div className={styles.page}>
                    <h4>OUR BLOG</h4>
                    <h2>Blog For Travel Updates</h2>
                </div>
            </div>
            <div className={styles.item}>
                {blogs.map((item) => (
                    <div key={item.id}>
                        <BlogItem item={item}/>
                    </div>
                ))}
            </div>
            <div className={styles.center}>
                <Link href={'/contact'}>
                    <Button type={'blue'}>See more</Button>
                </Link>
            </div>
        </div>
    );
};

export default Blog;