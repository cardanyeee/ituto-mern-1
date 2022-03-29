import "./widget.scss";
import { Link } from 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';



const Widget = ({ type }) => {



  const { users, subs, tutors, male, female, pnts } = useSelector(state => state.datas);

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
  const otherCount = pnts && pnts;


  switch (type) {
    case "user":
      data = {
        title: "REGISTERED USERS",
        display: userCount,
        isNoLink: true,
        link: "Registered Users",
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
        link: "Total Tutors",
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
        link: "Male Users",
        icon: (
          <MaleIcon
            className="icon"
            style={{
              backgroundColor: "#2F4858",
              color: "#F3F7FD",
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
        link: "Female Users",
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
        title: "Prefer Not to Say",
        display: otherCount,
        isNoLink: true,
        link: "Lorem Ipsum",
        icon: (
          <DoNotDisturbIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
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
          {/* <KeyboardArrowUpIcon />
          20 % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
