import { Box, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import React, { useEffect } from "react";
import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className={styles.container}
      id={"about"}
    >
      <Typography
        className={styles.title}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        ABOUT ME
      </Typography>
      <Box component="div" className={styles.subContainer}>
        <Box
          component="div"
          className={styles.textContainer}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Typography className={styles.text}>
          I am a web developer from Karachi, Pakistan. I enjoy building everything from small buisness sites to rich interactive web apps. if you are a buisness seeking a web presence or an employer looking to hire, you can get in touch with me here.
          </Typography>
        </Box>
        <Box
          className={styles.timeline}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2017</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>High School Graduation</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Web Developement Course<br/> Project</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Bs. Electronic Engineering</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography className={styles.year}>2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={styles.content}>Freelancer</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </div>
  );
};

export default About;
