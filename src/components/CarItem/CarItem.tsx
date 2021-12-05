import React from "react";
import { Card, CardHeader, CardContent, Typography, Box } from "../common";
import { useStyles } from "./CarItem.styles";
import { Car } from "../../interfaces/cars";
import { Image } from "../common/Image";

export const CarItem: React.FC<Car> = ({
  prices: {
    totalPrice: {
      amount: { display, currency },
    },
  },
  carGroupInfo: {
    modelExample: { name, imageUrl },
  },
}: Car) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={6}>
      <CardHeader title={name} />
      <CardContent>
        <Image src={imageUrl || "/images/car.svg"} width="100%" />
        <Box mt={2}>
          <Typography
            align="left"
            variant="h5"
          >{`${display} ${currency}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
