import { Typography, Box, Grid, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./Offer.module.css";
import OfferComponent from "./OfferComponent";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const url1 = "https://firebasestorage.googleapis.com/v0/b/fir-c232b.appspot.com/o/1.PNG?alt=media&token=db22d3b2-d0fd-45b7-b74b-39f197734580";
  const url2 = "https://firebasestorage.googleapis.com/v0/b/fir-c232b.appspot.com/o/2.PNG?alt=media&token=23c0a9ae-2f22-44e0-abd6-eaef3afa31ad%22";
  const url3 = "https://firebasestorage.googleapis.com/v0/b/fir-c232b.appspot.com/o/3.PNG?alt=media&token=4af2f4ca-b6cb-4263-a819-80541124cbf2";
  return (
    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="400">
      <Box
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
      >
        <Typography className={styles.title}>MY CERTIFICATES</Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid className={styles.container} container spacing={5}>
          <OfferComponent
            img={url1}
            title={"Expense Tracker"}
            details={"Expense Tracker that uses React Hook"}
            link={"http://applist01.surge.sh/"}
          />
          <OfferComponent
            img={url2}
            title={"COVID App"}
            details={"COVID App build using multiple APIs including Maps"}
            link={"http://applist02.surge.sh/"}
          />
          <OfferComponent
            img={url3}
            title={"Sindh-Paxy Chocolate"}
            details={"This was build using pure HTML and CSS"}
            link={"http://sindh-paxy-chocolate.surge.sh/"}
          />
        </Grid>
      </Container>
      <Box
        className={styles.btnContainer}
      >
      </Box>
    </div>
  );
};

export default Offer;
