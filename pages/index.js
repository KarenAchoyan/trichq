import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Blog from "../components/blog/blog";
import Sliders from "../components/sliders/sliders";
import Reviews from "../components/reviews/reviews";
import Tours from "../components/tours/tours";
import Banner from "../components/banders/banner";
import App from "../components/layouts/app";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../store/blog/actions";
import {getReviews} from "../store/reivews/actions";
import {getTours} from "../store/tour/actions";
import {getSlides} from "../store/slides/actions";
import {getGalleries} from "../store/gallery/actions";
import {Skeleton} from "antd";
import Loader from "../components/loader/loader";



export default function Home() {
    const blogs = useSelector((state) => state.blog.blogs);
    const blogsFetching = useSelector((state) => state.blog.isFetching);
    const tours = useSelector((state) => state.tour?.tours?.tours);
    const toursFetching = useSelector((state) => state.tour.isFetching);
    const slides = useSelector((state) => state.slide.slides);
    const slidesFetching = useSelector((state) => state.slide.isFetching);
    const galleries = useSelector((state) => state.gallery?.galleries);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs.request());
        dispatch(getTours.request());
        dispatch(getSlides.request())
        dispatch(getGalleries.request())
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Թռիչք Արշավական ակումբ</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {/*<Loader  loader={slidesFetching && blogsFetching && toursFetching}>*/}
                    <App>
                        <Banner slides={slides}/>
                        <Tours tours={tours}/>
                        <Sliders galleries={galleries}/>
                        <Blog blogs={blogs}/>
                    </App>
                {/*</Loader>*/}
            </main>
        </>
    );
}
