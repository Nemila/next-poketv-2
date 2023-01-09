import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Player from "../../../components/Player";
import { getAnimeDetails, getEpisode } from "../../../lib/animes";

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
  const { episodeId, animeId } = router.query;
  const currentEpisode = anime.episodes.find(
    (episode) => episode.id === episodeId
  );

  return (
    <div>
      <section>
        <Player sources={episode?.sources} />
      </section>
      <section>
        <h2>
          Epsiode {currentEpisode.number}: {currentEpisode.title}
        </h2>
        <p>{currentEpisode.description}</p>
      </section>
      <div>
        {anime?.episodes.map((episode) => (
          <Link
            href={`/watch/${anime.id}/${episode.id}`}
            key={episode.id}
            style={{ display: "block" }}
          >
            Episode {episode.number}: {episode.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StreamPage;
