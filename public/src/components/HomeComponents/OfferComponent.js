import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import styles from "./Offer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferComponent = ({img}) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={4}
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="400"
    >
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            className={styles.img}
            component="img"
            alt="image1"
            height="180"
            image={img}
            title="Restaraunt App"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default OfferComponent;
