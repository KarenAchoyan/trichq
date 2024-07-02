import React, {useEffect} from 'react';
import styles from "../../styles/blogList.module.css";
import { HomeOutlined } from "@ant-design/icons";
import List from "../../components/list/list";
import App from "../../components/layouts/app";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../store/blog/actions";

const Index = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBlogs.request());
    },[])
    return (
        <>
            <App>
                <DetailsBanner title={"Contact Us"}/>

            </App>
        </>
    );
};

export default Index;
