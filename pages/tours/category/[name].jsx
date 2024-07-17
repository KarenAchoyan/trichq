import React, {useEffect, useState} from 'react';
import App from "../../../components/layouts/app";
import DetailsBanner from "../../../components/detailsBanner/detailsBanner";
import Item from "../../../components/tours/item";
import {useDispatch, useSelector} from "react-redux";
import {getTours, getToursWithCategory} from "../../../store/tour/actions";
import styles from "../../../styles/tours.module.css";
import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {t} from "../../../utils/utils";
import {useRouter} from "next/dist/client/compat/router";

const Index = () => {
    const tours = useSelector((state) => state?.tour?.tours?.data?.tours);
    const category = useSelector((state) => state?.tour?.tours?.data?.category);
    const dispatch = useDispatch();
    const router = useRouter();
    const {name} = router.query;
    const [title, setTitle] = useState("");
    const {locale} = router;

    useEffect(() => {
        dispatch(getToursWithCategory.request({id:name}));
    }, [dispatch,name]);



    useEffect(() => {
        const title = (locale === 'en') ? category.name_en : (locale === 'ru') ? category.name_ru : category.name
        setTitle(title)
    }, [category.name, category.name_en, category.name_ru, locale, name])

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <App>
                <DetailsBanner title={title}/>
                <div className={styles.containerTours}>
                   <div className={styles.leftSection}>
                       <div className={styles.row}>
                           {tours?.map((item) => (
                               <div key={item.id} className={styles.item}>
                                   <Item item={item}/>
                               </div>
                           ))}
                       </div>
                   </div>
                    <div className={styles.rightSection}>
                        <div className={styles.contentRightSection}>
                            <Form
                                form={form}
                                name="contact"
                                onFinish={onFinish}
                                layout="vertical"
                            >
                                <Form.Item>
                                    <Input
                                        prefix={<SearchOutlined />}
                                        placeholder={t("search")}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: t("please_input_your_full_name") }]}
                                >
                                    <Input placeholder={t('name')} />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: t("please_input_your_email")}]}
                                >
                                    <Input placeholder={t('email')} />
                                </Form.Item>
                                <Form.Item
                                    name="comment"
                                    rules={[{ required: true, message: t('please_input_your_comment') }]}
                                >
                                    <Input.TextArea placeholder={t('type_comment_here')} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Send Now
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </App>
        </>
    );
};

export default Index;