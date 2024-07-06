import React, {useEffect, useState} from 'react';
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
import {t, truncateContent} from "../../utils/utils";
import {useRouter} from "next/dist/client/compat/router";

const {Meta} = Card;
const BlogItem = ({item}) => {
    const router = useRouter();
    const {locale} = router;

    const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    useEffect(() => {
        const title = (locale === 'en') ? item.title_en : (locale === 'ru') ? item.title_ru : item.title
        // const content = (locale === 'en') ? item.content_en : (locale === 'ru') ? item.content_ru : item.content
        setTitle(title)
        // setContent(content)

    }, [locale, item])
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
                <h2>{truncateContent(title, 50)}</h2>
            </div>
            <Link href={'/blogs/'+encodeURIComponent(item?.title)}>
                <div className={styles.blogButton}>
                    <span className={styles.span} > <span style={{marginRight:'5px'}}>{t('read_more')}</span><ArrowRightOutlined/></span>
                </div>
            </Link>
        </Card>
    );
};

export default BlogItem;