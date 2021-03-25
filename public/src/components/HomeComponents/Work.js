import { Typography, Box, Grid, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./Work.module.css";
import image1 from "../../images/expense.png";
import image3 from "../../images/covid.jpg";
import image2 from "../../images/chat.png";
// import { Link } from "react-router-dom";
import PortfolioComponents from "./PortfolioComponents";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="400" id="work">
      <Box
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
      >
        <Typography className={styles.title}>MY WORK</Typography>
      </Box>
      <Container maxWidth="md">
        <Grid className={styles.container} container spacing={5}>
          <PortfolioComponents
            img={image1}
            title={"Expense Tracker"}
            details={"Expense Tracker that uses React Hook"}
            link={"http://applist01.surge.sh/"}
          />
          <PortfolioComponents
            img={image2}
            title={"COVID App"}
            details={"COVID App build using multiple APIs including Maps"}
            link={"http://applist02.surge.sh/"}
          />
          <PortfolioComponents
            img={image3}
            title={"Sindh-Paxy Chocolate"}
            details={"This was build using pure HTML and CSS"}
            link={"http://sindh-paxy-chocolate.surge.sh/"}
          />
        </Grid>
      </Container>
      <Box
        className={styles.btnContainer}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
      {/* //   <Button className={styles.btnLink}>
      //     <Link to="/portfolio">View More</Link>
      //   </Button> */}
      </Box>
    </div>
  );
};

export default Work;
