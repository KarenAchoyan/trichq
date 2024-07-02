import React from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/detalis.module.css";
import {HomeOutlined} from "@ant-design/icons";
import OtherBlog from "../../components/blog/otherBlog";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";

const Name = () => {
    return (
        <App>
            <DetailsBanner title={"blog Us"}/>
            <OtherBlog />
        </App>
    );
};

    export default Name;