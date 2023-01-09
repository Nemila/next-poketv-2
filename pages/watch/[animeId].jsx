import Link from "next/link";
import React from "react";

export const getServerSideProps = async (context) => {
  const animeId = context.params.animeId;
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${animeId}`
  );
  const data = await res.json();
  return {
    props: {
      anime: data,
    },
  };
};

const DetailPage = ({ anime }) => {
  return (
    <section>
      <h1>Anime/{anime?.id}</h1>
      <h3>{anime?.title.english}</h3>
      <p>{anime?.description}</p>
      <p>Release date {anime?.releaseDate}</p>
      <p>Total episodes {anime?.totalEpisodes}</p>

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
    </section>
  );
};

export default DetailPage;
