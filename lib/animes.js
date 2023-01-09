export const getAnimes = async () => {
  try {
    const res = await fetch(
      "https://api.consumet.org/meta/anilist/trending?perPage=40"
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPopAnimes = async () => {
  try {
    const res = await fetch(
      "https://api.consumet.org/meta/anilist/popular?perPage=40"
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAnimeDetails = async (animeId) => {
  try {
    const res = await fetch(
      `https://api.consumet.org/meta/anilist/info/${animeId}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getEpisode = async (episodeId) => {
  try {
    const res = await fetch(
      `https://api.consumet.org/meta/anilist/watch/${episodeId}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
