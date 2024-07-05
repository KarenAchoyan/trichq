import React from 'react';
import {Avatar, Card} from 'antd';
import {
    ArrowRightOutlined,
    CheckSquareOutlined,
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import styles from "../../styles/blog.module.css"
import Link from "next/link";
import {truncateContent} from "../../utils/utils";

const {Meta} = Card;
const BlogItem = ({item}) => {
    return (
        <Card
            style={{ width: '100%', maxWidth: 420, margin:'auto' }}
            cover={
                <img
                    alt="example"
                    src={process.env.IMAGE_URL+item?.avatar}
                    i
                />
            }
        >
            <div className={styles.blogTextPage}>
                <h2>{truncateContent(item?.title, 50)}</h2>
            </div>
            <Link href={'/blogs/'+item?.id}>
                <div className={styles.blogButton}>
                    <span className={styles.span}>Read More <ArrowRightOutlined/></span>
                </div>
            </Link>
        </Card>
    );
};

export default BlogItem;