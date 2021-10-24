import * as C from "./styles";

interface Props {
  minHeader: boolean;
}

const Header = ({ minHeader }: Props) => {
  const initialScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <C.Container minHeader={minHeader}>
      <h1 onClick={initialScroll}>{"WatchFlix".toUpperCase()}</h1>
    </C.Container>
  );
};

export default Header;
