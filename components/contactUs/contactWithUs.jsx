import React from 'react';
import styles from "../../styles/contact.module.css"
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

import { Form, Input, Select, Button, Checkbox } from 'antd';
import {t} from "../../utils/utils";
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
                              <h5>{t("drop_us_a_line")}</h5>
                          </div>
                          <Form.Item
                              name='fullname'
                              rules={[{ required: true, message: t("please_input_your_full_name")}]}
                              className={styles.input}
                          >
                              <Input placeholder={t("contact_name")} />
                          </Form.Item>
                          <Form.Item
                              name={t('email')}
                              rules={[
                                  { required: true, message: t('please_input_your_email') },
                                  { type: 'email', message: 'The input is not a valid email!' }
                              ]}
                              className={styles.input}
                          >
                              <Input placeholder={t("your_email")} />
                          </Form.Item>
                          <Form.Item
                              name="message"
                              rules={[
                                  { required: true, message: t("please_enter_your_message") },
                                  { min: 10, message: t("contact_field_error_message_2") },
                                  { max: 200, message: t("contact_field_error_message_3") }
                              ]}
                              className={styles.input}
                          >
                              <TextArea placeholder={t("message")} rows={4} />
                          </Form.Item>
                          <Form.Item className={styles.button}>
                              <Button type="primary" htmlType="submit">{t("send_now")}</Button>
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