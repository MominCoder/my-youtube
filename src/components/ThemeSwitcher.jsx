import { useSelector, useDispatch } from "react-redux";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { toggleTheme } from "../utils/themeSlice.js";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTheme());
  const { theme } = useSelector((state) => state);

  return (
    <div className="flex items-center">
      {theme?.theme && (
        <BsSun
          onClick={() => onToggle()}
          className="hover:opacity-50 cursor-pointer"
        />
      )}
      {!theme?.theme && (
        <BsFillMoonFill
          onClick={() => onToggle()}
          className="hover:opacity-50 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
