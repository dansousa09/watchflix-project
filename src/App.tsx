import { useEffect, useState } from "react";
import tmdb from "./api/tmdb";
import { WatchItems, WatchItem } from "./interfaces/WatchItem";
import WatchSection from "./components/WatchSection";
import MainWatch from "./components/MainWatch";
import Header from "./components/Header";

function App() {
  const [watchList, setWatchList] = useState<WatchItems[]>([]);
  const [mainWatchData, setMainWatchData] = useState<WatchItem | null>();

  const [minHeader, setMinHeader] = useState(false);

  useEffect(() => {
    //Fetching the watch list from TMDBApi;
    const getFullWatchList = async () => {
      let list = await tmdb.watchList();
      setWatchList(list);

      let mainFilm = list.filter((i) => i.slug === "trending");
      let random = Math.floor(
        Math.random() * (mainFilm[0].items.results.length - 1)
      );
      let gotRandom = mainFilm[0].items.results[random];
      setMainWatchData(gotRandom);
    };
    getFullWatchList();
  }, []);

  useEffect(() => {
    const scrollViewer = () => {
      window.scrollY > 50 ? setMinHeader(true) : setMinHeader(false);
    };
    window.addEventListener("scroll", scrollViewer);
    return () => {
      window.removeEventListener("scroll", scrollViewer);
    };
  }, []);

  return (
    <>
      <Header minHeader={minHeader} />
      {mainWatchData && <MainWatch item={mainWatchData} />}
      {watchList.map((item, index) => (
        <WatchSection key={index} title={item.title} items={item.items} />
      ))}
    </>
  );
}

export default App;
