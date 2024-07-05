import React, {useEffect} from 'react';
import App from "../../../components/layouts/app";
import DetailsBanner from "../../../components/detailsBanner/detailsBanner";
import Item from "../../../components/tours/item";
import {useDispatch, useSelector} from "react-redux";
import {getTours} from "../../../store/tour/actions";
import styles from "../../../styles/tours.module.css";
import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Index = () => {
    const tours = useSelector((state) => state.tour.tours);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTours.request());
    }, [dispatch]);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <App>
                <DetailsBanner title={'Grid tours'}/>
                <div className={styles.containerTours}>
                   <div className={styles.leftSection}>
                       <div className={styles.row}>
                          {tours.map((item) => (
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
                                        placeholder="Search"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="comment"
                                    rules={[{ required: true, message: 'Please input your comment!' }]}
                                >
                                    <Input.TextArea placeholder="Type Comment here" />
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