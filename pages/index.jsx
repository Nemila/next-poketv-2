import Anime from "../components/Anime";
import { Box, Container, Grid, Typography } from "@mui/material";
// import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.consumet.org/meta/anilist/trending?perPage=40"
  );
  const data = await res.json();
  const res2 = await fetch(
    "https://api.consumet.org/meta/anilist/popular?perPage=40"
  );
  const data2 = await res2.json();

  return {
    props: {
      animes: data,
      popAnimes: data2,
    },
  };
};

export default function Home({ animes, popAnimes }) {
  // const { data, error, isLoading } = useSWR(
  //   "https://api.consumet.org/meta/anilist/trending?perPage=40",
  //   fetcher
  // );

  // const {
  //   data: popAnimes,
  //   error: popAnimesErr,
  //   isLoading: popAnimesIsLoading,
  // } = useSWR(
  //   "https://api.consumet.org/meta/anilist/popular?perPage=40",
  //   fetcher
  // );

  // if (error || popAnimesErr) return <div>failed to load</div>;
  // if (isLoading || popAnimesIsLoading) return <div>loading...</div>;

  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography variant="h5" mb={2}>
          Trending Animes
        </Typography>

        <Grid container spacing={2}>
          {animes.results.map((anime) => (
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
