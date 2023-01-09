import { Hls, Media } from "@vidstack/player-react";
import "@vidstack/player/hydrate.js";

const Player = ({ sources }) => {
  return (
    <Media>
      <Hls controls>
        <video preload="none" data-video="0" controls>
          {sources.map((source) => (
            <source key={source.url} src={source.url} />
          ))}
        </video>
      </Hls>
    </Media>
  );
};

export default Player;
