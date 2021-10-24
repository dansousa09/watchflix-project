import * as C from "./styles";
import { Items } from "../../interfaces/WatchItem";
import { ImEnter } from "react-icons/im";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";

interface Props {
  key: number;
  title: string;
  items: Items;
}

const WatchSection = ({ key, title, items }: Props) => {
  const [scrollX, setScrollX] = useState<number>(0);

  const handleLeftNavigation = () => {
    let nextNavigate = scrollX + Math.round(window.innerWidth / 2);
    if (nextNavigate > 0) {
      nextNavigate = 0;
    }
    setScrollX(nextNavigate);
  };

  const handleRightNavigation = () => {
    let nextNavigate = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items?.results.length * 150;
    if (window.innerWidth - listWidth > nextNavigate) {
      nextNavigate = window.innerWidth - listWidth - 60;
    }
    setScrollX(nextNavigate);
  };

  return (
    <C.Container>
      <C.TitleArea>
        <C.Title>{title}</C.Title>

        <C.ViewAllBtn>
          <ImEnter /> Ver todos os títulos
        </C.ViewAllBtn>
      </C.TitleArea>
      <C.ArrowPrev className="arrowNavigate" onClick={handleLeftNavigation}>
        <MdNavigateBefore />
      </C.ArrowPrev>
      <C.ArrowNext className="arrowNavigate" onClick={handleRightNavigation}>
        <MdNavigateNext />
      </C.ArrowNext>
      <C.ListArea>
        <C.List w={items?.results.length * 300} marginLeft={scrollX}>
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <C.Item key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </C.Item>
            ))}
        </C.List>
      </C.ListArea>
    </C.Container>
  );
};

export default WatchSection;
