import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Link from "next/link";
import React from "react";

const Anime = ({ anime }) => {
  const { id, title, image, totalEpisodes } = anime;

  return (
    <Link href={`/watch/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" noWrap>
              {title.english ? title.english : title.native}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Episodes {totalEpisodes}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Anime;
