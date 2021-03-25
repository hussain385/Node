import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styles from "./Skills.module.css";
import react2 from "../../images/react2.png";
import firebase2 from "../../images/firebase.png";
import css2 from "../../images/css2.png";
import mongodb from "../../images/mongodb.png";
import express from "../../images/express.png";
import html from "../../images/html.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const skillsData = [
    { img: react2, title: "React" },
    { img: firebase2, title: "Firebase" },
    { img: css2, title: "CSS3" },
    { img: mongodb, title: "mongodb" },
    { img: express, title: "express" },
    { img: html, title: "html" },
  ];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className={styles.mainContainer}
      id="skills"
    >
      <Box>
        <Typography className={styles.title}>MY SKILLS</Typography>
      </Box>
      <Container maxWidth={1} className={styles.container}>
        <Grid container spacing={6}>
          {skillsData.map((skill) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={2}
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-delay="400"
              >
                <img className={styles.img} src={skill.img} alt={"skills"} />
                <Typography className={styles.skillTitle}>
                  {skill.title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
