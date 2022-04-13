import "./widget.scss";
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({ type }) => {


  const dispatch = useDispatch();

    useEffect(() => {


    }, [dispatch]);

  const { tuteeCount: tutee } = useSelector(state => state.getTuteeCounts);
  const { users, subs, tutors, male, female} = useSelector(state => state.datas);

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
  const tuteeCount = tutee.length  ;


  switch (type) {
    case "user":
      data = {
        title: "REGISTERED USERS",
        display: userCount,
        isNoLink: true,
        link: `${userCount} Total Users`,
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
          <MenuBookIcon
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
        link: `${tutorCount} Total Tutors `,
        icon: (
          <SchoolIcon
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
        link: `${maleCount} Total Male users`,
        icon: (
          <MaleIcon
            className="icon"
            style={{
              backgroundColor: "rgb(49 143 203 / 46%)",
              color: "#2F4858",
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
        link: `${femaleCount} Total Female users `,
        icon: (
          <FemaleIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "other":
      data = {
        title: "TOTAL TUTEES",
        display: tuteeCount,  
        isNoLink: true,
        link: `${tuteeCount} Total Tutees`,
        icon: (
          <SchoolIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
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
        <span className="title-widget">{data.title}</span>
        <span className="counter">
          <b>{data.display}</b>
        </span>
        {data.isTrue === true &&
          <span id="link">
            <Link to="/dashboard/subjects" style={{ textDecoration: "none", color: "#0A8B5C" }}>
              {data.link}
            </Link>
          </span>}

        {data.isNoLink === true &&
          <span id="link">
            {data.link}
          </span>
        }

      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
