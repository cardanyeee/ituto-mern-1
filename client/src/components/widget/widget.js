import "./widget.scss";
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";






const Widget = ({ type }) => {

  const dispatch = useDispatch();


  const { loading, users, subs, tutors, male, female, other, pnts } = useSelector(state => state.datas);

  // useEffect(() => {
  //     dispatch(getData());
  // }, [dispatch]);

  let data;

  //temporary
  const userCount = users && users.length;
  const subjectCount = subs && subs.length;
  const tutorCount = tutors && tutors.length;
  const maleCount = male && male;
  const femaleCount = female && female;
  const otherCount = other && other;
  const pntsCount = pnts && pnts;


  switch (type) {
    case "user":
      data = {
        title: "REGISTERED USERS",
        display: userCount,
        isNoLink: true,
        link: "View all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "subject":
      data = {
        title: "TOTAL SUBJECTS",
        display: subjectCount,
        isTrue: true,
        link: "View All Subjects",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "tutor":
      data = {
        title: "TOTAL TUTORS",
        display: tutorCount,
        isNoLink: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "male":
      data = {
        title: "MALE USERS",
        display: maleCount,
        isNoLink: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "female":
      data = {
        title: "FEMALE USERS",
        display: femaleCount,
        isNoLink: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;

    case "other":
      data = {
        title: "OTHERS",
        display: otherCount,
        isNoLink: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          <b>{data.display}</b>
        </span> {data.isTrue &&  <a href="/dashboard/subjects" className="link_name">{data.link}</a>}
        {data.isNoLink &&  <span>{data.link}</span>}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon />
          20 % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
