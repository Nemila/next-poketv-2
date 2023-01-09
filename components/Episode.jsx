import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Episode = ({ episode, anime }) => {
  return (
    <Link
      href={`/watch/${anime.id}/${episode.id}`}
      style={{ display: "block" }}
    >
      <Button
        variant="outlined"
        sx={{ justifyContent: "flex-start" }}
        fullWidth
      >
        Episode {episode.number}
      </Button>
    </Link>
  );
};

export default Episode;
