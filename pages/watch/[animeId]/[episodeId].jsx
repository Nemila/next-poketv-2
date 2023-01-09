import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Player from "../../../components/Player";
import Episode from "../../../components/Episode";
import { Box, Container, Stack, Typography } from "@mui/material";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StreamPage = ({}) => {
  const router = useRouter();
  const { episodeId, animeId } = router.query;
  const {
    data: anime,
    error,
    isLoading,
  } = useSWR(`https://api.consumet.org/meta/anilist/info/${animeId}`, fetcher);

  const {
    data: episode,
    error: episodeErr,
    isLoading: episodeIsLoading,
  } = useSWR(
    `https://api.consumet.org/meta/anilist/watch/${episodeId}`,
    fetcher
  );

  const currentEpisode = anime.episodes.find(
    (episode) => episode.id === episodeId
  );

  const desc = useRef(null);
  useEffect(() => {
    if (desc && anime) desc.current.innerHTML = anime.description;
  }, [desc, anime]);

  if (error || episodeErr) return <div>failed to load</div>;
  if (isLoading || episodeIsLoading) return <div>loading...</div>;

  return (
    <Container maxWidth="md">
      <Box py={2}>
        <Player sources={episode.sources} />

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
