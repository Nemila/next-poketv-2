import React, { useEffect, useRef } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Episode from "../../components/Episode";
import { getAnimeDetails } from "../../lib/animes";

export const getServerSideProps = async (context) => {
  const animeId = context.params.animeId;
  const anime = await getAnimeDetails(animeId);
  return {
    props: {
      anime,
    },
  };
};

const DetailPage = ({ anime }) => {
  const desc = useRef(null);
  useEffect(() => {
    if (desc && anime) desc.current.innerHTML = anime.description;
  }, [desc, anime]);

  return (
    <Box>
      <Box
        sx={{
          width: 1,
          height: 400,
          backgroundImage: `url(${anime.cover ? anime.cover : anime.color})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      <Container maxWidth="md" disableGutters>
        <Box px={2} py={4}>
          <Typography variant="h4" mb={1}>
            {anime.title?.english ? anime.title.english : anime.title.native}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            Release date {anime?.releaseDate} | Total episodes{" "}
            {anime?.totalEpisodes}
          </Typography>
          <Typography variant="body2" ref={desc}>
            {anime?.description}
          </Typography>

          <Stack spacing={1} mt={2}>
            <Typography variant="h6">All episodes</Typography>
            {anime?.episodes.map((episode) => (
              <Episode key={episode.id} anime={anime} episode={episode} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailPage;
