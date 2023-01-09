import Anime from "../components/Anime";
import { Box, Container, Grid, Typography } from "@mui/material";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://api.consumet.org/meta/anilist/trending?perPage=40",
    fetcher
  );

  const {
    data: popAnimes,
    error: popAnimesErr,
    isLoading: popAnimesIsLoading,
  } = useSWR(
    "https://api.consumet.org/meta/anilist/popular?perPage=40",
    fetcher
  );

  if (error || popAnimesErr) return <div>failed to load</div>;
  if (isLoading || popAnimesIsLoading) return <div>loading...</div>;

  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography variant="h5" mb={2}>
          Trending Animes
        </Typography>

        <Grid container spacing={2}>
          {data.results.map((anime) => (
            <Grid item key={anime.id} xs={6} sm={3} md={2}>
              <Anime anime={anime} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box py={2}>
        <Typography variant="h5" mb={2}>
          Popular Animes
        </Typography>

        <Grid container spacing={2}>
          {popAnimes.results.map((anime) => (
            <Grid item key={anime.id} xs={6} sm={3} md={2}>
              <Anime anime={anime} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
