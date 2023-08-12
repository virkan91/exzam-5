import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide copy";
 

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div>
        <DarkModeSwitch
          className="relative right-2"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
    </>
  );
}
export default Switcher;
