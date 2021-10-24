import * as C from "./styles";
import { WatchItem } from "../../interfaces/WatchItem";
import { useEffect, useState } from "react";

interface Props {
  item: WatchItem;
}

const MainWatch = ({ item }: Props) => {
  const [voteAverage, setVoteAverage] = useState(true);
  useEffect(() => {
    if (item?.vote_average < 7) {
      setVoteAverage(false);
    }
  }, [item?.vote_average]);

  let releaseYear = new Date(item?.release_date).getFullYear();

  let genres = [];
  for (let i in item?.genres) {
    console.log(item?.genres[i].name);
    genres.push(item?.genres[i].name);
  }

  let description = item?.overview;
  let descriptionLength = item?.overview?.length;
  if ((descriptionLength = 200)) {
    description = description?.substring(0, 200) + "..";
  }

  return (
    <div>
      <C.Container>
        <C.WatchInfoArea>
          <C.Title>
            {item?.original_title ? item?.original_title : item?.original_name}
          </C.Title>
          <C.InfoArea>
            <C.VoteAverage voteAverage={voteAverage}>
              {item?.vote_average.toFixed(1)}
            </C.VoteAverage>
            <C.Year>{releaseYear}</C.Year>
            <C.MoreInfo>▷ Mais Informações</C.MoreInfo>
          </C.InfoArea>
          <C.Overview>{description}</C.Overview>
        </C.WatchInfoArea>
        <C.Poster>
          <img
            src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
            alt={item?.original_title}
          />
        </C.Poster>
      </C.Container>
    </div>
  );
};

export default MainWatch;
