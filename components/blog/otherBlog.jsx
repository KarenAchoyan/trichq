import React, {useEffect, useState} from 'react';
import styles from "../../styles/detalis.module.css"
import {CalendarOutlined, MessageOutlined} from "@ant-design/icons";
import {Input} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallBlog from "./smallBlog";
import {useRouter} from "next/dist/client/compat/router";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../store/blog/actions";
import {formatDate} from "../../utils/utils";
import DetailsBanner from "../detailsBanner/detailsBanner";

const OtherBlog = () => {

};

export default OtherBlog;