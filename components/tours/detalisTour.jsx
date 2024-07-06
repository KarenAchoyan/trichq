import React, {useEffect, useState} from 'react';
import styles from '../../styles/tourDetalis.module.css'
import {CalendarOutlined, ClockCircleOutlined, GlobalOutlined, TagsOutlined, UserOutlined} from "@ant-design/icons";
import {Button, DatePicker, Form, Input} from "antd";
import {Image} from "antd";
import BlogItem from "../blog/blogItem";
import {useRouter} from "next/router";
import {t} from "../../utils/utils";

const DetalisTour = ({tour}) => {
    const [form] = Form.useForm();
    const [page, setPage] = useState(1)
    const router = useRouter();
    const {locale} = router;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const title = (locale === 'en') ? tour.title_en : (locale === 'ru') ? tour.title_ru : tour.title;
        const content = (locale === 'en') ? tour.content_en : (locale === 'ru') ? tour.content_ru : tour.content;
        const date = (locale === 'en') ? tour.date_en : (locale === 'ru') ? tour.date_ru : tour.date;
        const duration = (locale === 'en') ? tour.duration_en : (locale === 'ru') ? tour.duration_ru : tour.duration;
        const location = (locale === 'en') ? tour.location_en : (locale === 'ru') ? tour.location_ru : tour.location;
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

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    function handlerSubmit() {
        console.log('ok')
    }

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
                        icon: <GlobalOutlined />,
                        content: (
                            <div>
                                <p>{location}</p>
                                <p>{t("location")}</p>
                            </div>
                        )
                    }}/>
                    <BtnItem item={{
                        icon: <UserOutlined />,
                        content: (
                            <div>
                                <p>{tour?.age}+</p>
                                <p>{t("age")}</p>
                            </div>
                        )
                    }}/>
                    <BtnItem item={{
                        icon: <CalendarOutlined />,
                        content: (
                            <div>
                                <p>{date}</p>
                                <p>{t("date")}</p>
                            </div>
                        )
                    }}/>
                </div>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={{__html: (locale === 'en') ? tour?.content_en : (locale === 'ru') ? tour?.content_ru : tour?.content }}/>
                </div>
                <div className={styles.blogContent}>
                    <h3>Ի՞նչ է անհրաժեշտ վերցնել</h3>
                    <div className={styles.blogs}>
                        {tour?.blogs.map((item) => (
                            <div key={item.id}>
                                <BlogItem item={item.blog}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    function Content2() {
        return (
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className="stepper">
                        {tour?.steps?.map((step,index)=>(
                            <div key={index} className="step">
                                <div>
                                    <div className="circle">{index+1}</div>
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
                    {JSON.parse(tour.images).map((image,index)=>(
                        <div key={index} className={styles.image}>
                            <Image src={process.env.IMAGE_URL+image} preview={true}/>
                        </div>
                    ))}


                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.banner}>
                <h2>{tour?.title}</h2>
            </div>
            <div className={styles.container}>

                <div className={styles.containerTours}>
                    <div className={styles.buttons}>
                        <div className={`${styles.itemBtn} ${page===1 ? styles.active : null}`} onClick={() => setPage(1)}>Details</div>
                        <div className={`${styles.itemBtn} ${page===2 ? styles.active : null}`} onClick={() => setPage(2)}>Itinerary</div>
                        <div className={`${styles.itemBtn} ${page===3 ? styles.active : null}`} onClick={() => setPage(3)}>Photos</div>
                    </div>
                    <div className={styles.contents}>
                        {page === 1 ? <Content1/> : page === 2 ? <Content2/> : <Content3/>}
                    </div>

                </div>
                <div className={styles.bookingBar}>
                    <div className={styles.pricePlace}>
                        <div className={styles.divider}>
                            <TagsOutlined/>
                            <p>{tour?.price} AMD</p>
                        </div>
                        <div className={styles.priceDescription}>
                            One tour per person
                        </div>
                    </div>
                    <div className={styles.pricePlace}>
                        <h3>Book the tour</h3>
                        <div className={styles.contentPricePlace}>
                            <Form form={form} onFinish={handlerSubmit} style={{width: '100%'}}>
                                <Form.Item
                                    name="date"
                                    rules={[
                                        {required: true, message: "Please select a date"},
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject("Invalid date")
                                        }
                                    ]}
                                >
                                    <DatePicker onChange={onChange} style={{width: '100%'}}/>
                                </Form.Item>
                                <Form.Item
                                    name="number"
                                    rules={[
                                        {required: true, message: "Please enter a number"},

                                    ]}
                                >
                                    <Input
                                        type="number"
                                        placeholder="Enter number"
                                        prefix={<UserOutlined/>}
                                        style={{width: '100%'}}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                        Book now
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetalisTour;