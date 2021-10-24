import { useTheme } from "../../contexts/ThemeContext";
import { ThemeActions } from "../../interfaces/IContexts";
import * as C from "./styles";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface Props {
  minHeader: boolean;
}

const Header = ({ minHeader }: Props) => {
  const initialScroll = () => {
    window.scrollTo(0, 0);
  };

  const { state, dispatch } = useTheme();
  const toggleThemeIcon = () => {
    dispatch({
      type: ThemeActions.setTheme,
      payload: state.theme === "light" ? "dark" : "light",
    });
    console.log(state.theme);
  };

  return (
    <C.Container minHeader={minHeader}>
      <C.ToggleThemeIcon onClick={toggleThemeIcon}>
        {state.theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </C.ToggleThemeIcon>
      <h1 onClick={initialScroll}>{"WatchFlix".toUpperCase()}</h1>
    </C.Container>
  );
};

export default Header;
