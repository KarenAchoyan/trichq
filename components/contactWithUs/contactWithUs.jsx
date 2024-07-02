import React from 'react';
import styles from "../../styles/contact.module.css"
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

import { Form, Input, Select, Button, Checkbox } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const ContactWithUs = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <div className={styles.contactBox}>
          <div className={styles.container}>
              <div className={styles.ss}>
                  <Form
                      name="contact"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                  >
                      <div className={styles.contactInput}>
                          <div className={styles.contactText}>
                              <h5>Drop Us a Line...</h5>
                          </div>
                          <Form.Item
                              name="fullName"
                              rules={[{ required: true, message: 'Please input your full name!' }]}
                              className={styles.input}
                          >
                              <Input placeholder="Full Name" />
                          </Form.Item>
                          <Form.Item
                              name="email"
                              rules={[
                                  { required: true, message: 'Please input your email!' },
                                  { type: 'email', message: 'The input is not a valid email!' }
                              ]}
                              className={styles.input}
                          >
                              <Input placeholder="Your Email" />
                          </Form.Item>
                          <Form.Item
                              name="tour"
                              rules={[{ required: true, message: 'Please select a tour!' }]}
                              className={styles.input}
                          >
                              <Select placeholder="Select a tour" className={styles.customSelect}>
                                  <Option value="1">Skydrive</Option>
                                  <Option value="2">Wild Tour</Option>
                                  <Option value="3">City Tour</Option>
                              </Select>
                          </Form.Item>
                          <Form.Item
                              name="message"
                              rules={[{ required: true, message: 'Please enter your message!' }]}
                              className={styles.input}
                          >
                              <TextArea placeholder="Message" rows={4} />
                          </Form.Item>
                          <Form.Item
                              name="agreement"
                              valuePropName="checked"
                              rules={[{ validator:(_, value) => value ? Promise.resolve() : Promise.reject('You must agree to the terms and policies!') }]}
                              className={styles.checkBox}
                          >
                              <Checkbox>
                                  <span className={styles.contactBoxSpan}>I agree to all terms and policies</span>
                              </Checkbox>
                          </Form.Item>
                          <Form.Item className={styles.button}>
                              <Button type="primary" htmlType="submit">Send Now</Button>
                          </Form.Item>
                      </div>
                  </Form>
              </div>
              <div className={styles.contactImg}>
                  <img src="/banner-four-img-1.png" alt="" />
              </div>
          </div>
        </div>

    );
};

export default ContactWithUs;