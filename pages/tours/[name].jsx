import React, {useEffect, useState} from 'react';
import App from "../../components/layouts/app";
import DetalisTour from "../../components/tours/detalisTour";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getTour, reservationTour} from "../../store/tour/actions";
import {Button, Col, DatePicker, Drawer, Form, Image, Input, message, Row, Skeleton, Space} from "antd";
import styles from "../../styles/tourDetalis.module.css";
import {CalendarOutlined, ClockCircleOutlined, GlobalOutlined, TagsOutlined, UserOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";
import BlogItem from "../../components/blog/blogItem";
import {info} from "next/dist/build/output/log";

const Index = () => {
    const router = useRouter();
    const {name} = router.query;
    const {locale} = router;
    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tour?.selectedTour?.data);
    const isFetching = useSelector((state) => state.tour?.isFetching);
    const isAdding = useSelector((state) => state.tour?.isAdding);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [page, setPage] = useState(1)

    const [infos, setInfos] = useState({});

    const [images, setImages] = useState(null)

    useEffect(() => {
        dispatch(getTour.request({id: name}));
    }, [dispatch, name])

    useEffect(() => {
        const photos = JSON.parse(tour?.images || "[]");
        setImages(photos)
    }, [tour])

    useEffect(() => {
        const title = (locale === 'en') ? tour?.title_en : (locale === 'ru') ? tour?.title_ru : tour?.title;
        const content = (locale === 'en') ? tour?.content_en : (locale === 'ru') ? tour?.content_ru : tour?.content;
        const date = (locale === 'en') ? tour?.date_en : (locale === 'ru') ? tour?.date_ru : tour?.date;
        const duration = (locale === 'en') ? tour?.duration_en : (locale === 'ru') ? tour?.duration_ru : tour?.duration;
        const location = (locale === 'en') ? tour?.location_en : (locale === 'ru') ? tour?.location_ru : tour?.location;
        setTitle(title)
        setContent(content)
        setDate(date)
        setLocation(location)
        setDuration(duration)

    }, [locale, tour])

    function BtnItem({item}) {
        return (
            <div className={styles.itemDetail}>
                <div>
                    {item.icon}
                </div>
                <div>
                    {item.content}
                </div>
            </div>
        )
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    function handlerSubmit(values) {
        setInfos({...values})
        showDrawer()
    }

    const onFinish = (values) => {
        setInfos({...infos, ...values})
        dispatch(reservationTour.request({id:tour.id, ...infos, ...values}))
        onClose();
        message.success("Հաջողությամբ հաստաված է")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function Content1() {
        return (
            <div className={styles.content}>
                <div className={styles.row}>
                    <BtnItem item={{
                        icon: <ClockCircleOutlined/>,
                        content: (
                            <div>
                                <p>{duration}</p>
                                <p>{t("duration")}</p>
                            </div>
                        )
                    }}/>
                    <BtnItem item={{
                        icon: <GlobalOutlined/>,
                        content: (
                            <div>
                                <p>{location}</p>
                                <p>{t("location")}</p>
                            </div>
                        )
                    }}/>
                    <BtnItem item={{
                        icon: <UserOutlined/>,
                        content: (
                            <div>
                                <p>{tour?.age}+</p>
                                <p>{t("age")}</p>
                            </div>
                        )
                    }}/>
                    <BtnItem item={{
                        icon: <CalendarOutlined/>,
                        content: (
                            <div>
                                <p>{date}</p>
                            </div>
                        )
                    }}/>
                </div>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={{__html: (locale === 'en') ? tour?.content_en : (locale === 'ru') ? tour?.content_ru : tour?.content}}/>
                </div>

            </div>
        )
    }

    function Content2() {
        return (
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className="stepper">
                        {tour?.steps?.map((step, index) => (
                            <div key={index} className="step">
                                <div>
                                    <div className="circle">{index + 1}</div>
                                </div>
                                <div className="content">
                                    <h3>{step?.title}</h3>
                                    <p>{step?.content}</p>
                                </div>
                                <div className="line"/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }

    function Content3() {
        return (
            <div className={styles.content}>
                <div className={styles.row}>
                    {images?.map((image, index) => (
                        <div key={index} className={styles.image}>
                            <Image src={process.env.IMAGE_URL + image} preview={true}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <App>
            <div className={styles.banner}>
                <div className={styles.overline}>
                    <Skeleton loading={isFetching} active>
                        <h2>{tour?.title}</h2>
                    </Skeleton>
                </div>
            </div>
            <div className={styles.container}>

                <div className={styles.containerTours}>
                    <div className={styles.contents}>
                        <Content1/>
                        <Content3/>
                        <div className={styles.blogContent}>
                            <Skeleton loading={isFetching} active>
                                <h3>Ի՞նչ է անհրաժեշտ վերցնել</h3>
                                <div className={styles.blogs}>
                                    {tour?.blogs?.map((item) => (
                                        <div key={item.id}>
                                            <BlogItem item={item.blog}/>
                                        </div>
                                    ))}
                                </div>
                            </Skeleton>
                        </div>
                    </div>

                </div>
                <div className={styles.bookingBar}>
                    <div className={styles.pricePlace}>
                        <div className={styles.divider}>
                            <TagsOutlined/>
                            <p>{tour?.price} AMD</p>
                        </div>
                        <div className={styles.priceDescription}>
                            {t('one_tour_per_person')}
                        </div>
                    </div>
                    <div className={styles.pricePlace}>
                        <h3>{t("book_the_tour")}</h3>
                        <div className={styles.contentPricePlace}>
                            <Form form={form} onFinish={handlerSubmit} style={{width: '100%'}}>
                                <Form.Item
                                    name={'count'}
                                    rules={[
                                        {required: true, message: t('please_enter_a_number')},

                                    ]}
                                >
                                    <Input
                                        type={t('number')}
                                        placeholder={t('Enter_number')}
                                        prefix={<UserOutlined/>}
                                        style={{width: '100%'}}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                        {t('book_now')}
                                    </Button>
                                </Form.Item>
                            </Form>
                            <Drawer
                                title={t('tour_bron')}
                                width={720}
                                onClose={onClose}
                                open={open}
                                bodyStyle={{paddingBottom: 80}}
                            >
                                <Form
                                    id="myForm"
                                    layout="vertical"
                                    hideRequiredMark
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="name"
                                                label={t('contact_name')}
                                                rules={[{required: true, message: t('please_enter_name')}]}
                                            >
                                                <Input placeholder={t('please_enter_name')}/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="surname"
                                                label={t('contact_surname')}
                                                rules={[{required: true, message: t('please_enter_surname')}]}
                                            >
                                                <Input style={{width: '100%',}}
                                                       placeholder={t('please_enter_surname')}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="phone"
                                                label={t('phone')}
                                                rules={[{required: true, message: t('please_enter_phone')}]}
                                            >
                                                <Input placeholder={t('please_enter_phone')}/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name='email'
                                                label={t('email_us')}
                                                rules={[{required: true, message: t('contact_field_error_email')}]}
                                            >
                                                <Input style={{width: '100%',}} placeholder={t('contact_field_error_email')}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Form.Item
                                                name="message"
                                                label={t('contact_message')}
                                                rules={[{required: true, message: t('contact_field_error_message')}]}
                                            >
                                                <Input.TextArea rows={4} placeholder={t('contact_field_error_message')}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Button form="myForm" key="submit" htmlType="submit" type="primary">
                                                {t('contact_send')}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;