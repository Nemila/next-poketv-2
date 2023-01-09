import { useRouter } from "next/router";
import React from "react";
import Player from "../../../components/Player";
import Episode from "../../../components/Episode";
import { Box, Container, Stack, Typography } from "@mui/material";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StreamPage = () => {
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

  if (error || episodeErr) return <div>failed to load</div>;
  if (isLoading || episodeIsLoading) return <div>loading...</div>;

  return (
    <Container maxWidth="md">
      <Box py={2}>
        <Player sources={episode.sources} />

        <Typography variant="h5" my={2}>
          Epsiode{" "}
          {
            anime.episodes.find((itemEpisode) => itemEpisode.id === episodeId)
              .number
          }
        </Typography>

        <Typography variant="body2">{anime.description}</Typography>

        <Stack spacing={1} mt={2}>
          <Typography variant="h6">All episodes</Typography>

          {anime.episodes.map((itemEpisode) => (
            <Episode key={itemEpisode.id} anime={anime} episode={itemEpisode} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default StreamPage;
