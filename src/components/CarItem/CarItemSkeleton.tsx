import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Skeleton,
} from "../common";
import { useStyles } from "./CarItem.styles";

export const CarItemSkeleton: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <CardContent>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </CardContent>
      <CardActions disableSpacing>
        <Skeleton animation="wave" height={10} width="40%" />
      </CardActions>
    </Card>
  );
};
