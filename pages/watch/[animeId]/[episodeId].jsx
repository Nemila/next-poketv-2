import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Player from "../../../components/Player";
import Episode from "../../../components/Episode";
import { getAnimeDetails, getEpisode } from "../../../lib/animes";
import { Box, Container, Stack, Typography } from "@mui/material";

export const getServerSideProps = async (context) => {
  const animeId = context.params.animeId;
  const episodeId = context.params.episodeId;

  const anime = await getAnimeDetails(animeId);
  const episode = await getEpisode(episodeId);

  return {
    props: {
      anime,
      episode,
    },
  };
};

const StreamPage = ({ anime, episode }) => {
  const router = useRouter();
  const { episodeId } = router.query;
  const currentEpisode = anime.episodes.find(
    (episode) => episode.id === episodeId
  );

  const desc = useRef(null);
  useEffect(() => {
    if (desc && anime) desc.current.innerHTML = anime.description;
  }, [desc, anime]);

  return (
    <Container maxWidth="md">
      <Box py={2}>
        <Player sources={episode?.sources} />

        <Typography variant="h5" my={2}>
          Epsiode {currentEpisode.number}: {currentEpisode.title}
        </Typography>

        <Typography variant="body2" ref={desc}>
          {currentEpisode.description}
        </Typography>

        <Stack spacing={1} mt={2}>
          <Typography variant="h6">All episodes</Typography>
          {anime?.episodes.map((episode) => (
            <Episode key={episode.id} anime={anime} episode={episode} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default StreamPage;
