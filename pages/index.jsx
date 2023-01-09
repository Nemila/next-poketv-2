import Anime from "../components/Anime";
import { getAnimes, getPopAnimes } from "../lib/animes";
import { Box, Container, Grid, Typography } from "@mui/material";

export const getStaticProps = async () => {
  const animes = await getAnimes();
  const popAnimes = await getPopAnimes();

  return {
    props: {
      animes,
      popAnimes,
    },
  };
};

export default function Home({ animes, popAnimes }) {
  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography variant="h5" mb={2}>
          Trending Animes
        </Typography>
        <Grid container spacing={2}>
          {animes?.map((anime) => (
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
          {popAnimes?.map((anime) => (
            <Grid item key={anime.id} xs={6} sm={3} md={2}>
              <Anime anime={anime} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
