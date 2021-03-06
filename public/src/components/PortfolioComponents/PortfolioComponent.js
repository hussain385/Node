import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./PortfolioComponent.module.css";
import PortfolioComponents from "../HomeComponents/PortfolioComponents";
import image1 from "../../images/expense.png";
import image2 from "../../images/covid.jpg";
import image3 from "../../images/chat.png";

const PortfolioComponent = () => {
  return (
    <div className={styles.container}>
      <Box component="div" className={styles.header}>
        <Typography className={styles.title}>Live Projects</Typography>
      </Box>
      <Container maxWidth="md" className={styles.workContainer}>
        <Grid container spacing={3}>
          <PortfolioComponents
            img={image1}
            title={"Expense Tracker"}
            link={"http://applist01.surge.sh/"}
            details={"Expense Tracker that uses React Hook"}
          />
          <PortfolioComponents
            img={image2}
            title={"COVID App"}
            link={"http://applist02.surge.sh/"}
            details={"COVID App build using multiple APIs including Maps"}
          />
          <PortfolioComponents
            img={image3}
            title={"Sindh-Paxy Chocolate"}
            link={"http://sindh-paxy-chocolate.surge.sh/"}
            details={"This was build using pure HTML and CSS"}
          />
          <PortfolioComponents
            img={image2}
            title={"Corona App"}
            link={"www.google.com"}
            details={"Details of Corona App"}
          />
          <PortfolioComponents
            img={image3}
            title={"Chatty App"}
            link={"www.google.com"}
            details={"Details of Chatty App"}
          />
          <PortfolioComponents
            img={image1}
            title={"Bar App"}
            link={"www.google.com"}
            details={"Details of Bar App"}
          />
        </Grid>
      </Container>
      <Box component="div" className={styles.header}>
        <Typography className={styles.title}>Other Projects</Typography>
      </Box>
      <Container maxWidth="md" className={styles.workContainer}>
        <Grid container spacing={3}>
          <PortfolioComponents
            img={image1}
            title={"Restaraunt App"}
            link={"www.google.com"}
            details={"Details of Restaraunt App"}
          />
          <PortfolioComponents
            img={image2}
            title={"COVID App"}
            link={"www.google.com"}
            details={"Details of Covid App"}
          />
          <PortfolioComponents
            img={image3}
            title={"Chat App"}
            link={"www.google.com"}
            details={"Details of Chat App"}
          />
          <PortfolioComponents
            img={image2}
            title={"Corona App"}
            link={"www.google.com"}
            details={"Details of Corona App"}
          />
          <PortfolioComponents
            img={image3}
            title={"Chatty App"}
            link={"www.google.com"}
            details={"Details of Chatty App"}
          />
          <PortfolioComponents
            img={image1}
            title={"Bar App"}
            link={"www.google.com"}
            details={"Details of Bar App"}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
