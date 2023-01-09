import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Episode from "../../components/Episode";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DetailPage = () => {
  const desc = useRef(null);

  const router = useRouter();
  const { animeId } = router.query;

  const {
    data: anime,
    error,
    isLoading,
  } = useSWR(`https://api.consumet.org/meta/anilist/info/${animeId}`, fetcher);

  useEffect(() => {
    if (desc && anime) desc.current.innerHTML = anime.description;
  }, [desc, anime]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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
            {anime.title.english ? anime.title.english : anime.title.native}
          </Typography>

          <Typography variant="subtitle1" mb={1}>
            Release date {anime.releaseDate} | Total episodes{" "}
            {anime.totalEpisodes}
          </Typography>

          <Typography variant="body2" ref={desc}></Typography>

          <Stack spacing={1} mt={2}>
            <Typography variant="h6">All episodes</Typography>

            {anime.episodes.map((itemEpisode) => (
              <Episode
                key={itemEpisode.id}
                anime={anime}
                episode={itemEpisode}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailPage;
