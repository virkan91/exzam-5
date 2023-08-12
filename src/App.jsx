
import './App.css'

import "./18n";


// icons
import { AiOutlineMenu } from "react-icons/ai";
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import { useTranslation } from 'react-i18next';
import MyTranslation from "./components/MyTranslation";
import Switcher from './components/Darkmode/Switcher';

function App() {
  
// translations________________________
  const { t, i18n } = useTranslation();
  
  
// _________________________________
  
  
  return (
    <div className="dark:bg-[#000] h-screen dark:text-white duration-300">
      <MyTranslation></MyTranslation>

      <h1 className="text-3xl font-bold underline">
        {t("test")}
      </h1>

      <button>{t("test2")}</button>
      <div className='flex md:hidden duration-300'>
        <AiOutlineMenu className="text-[90px] text-[blue]"></AiOutlineMenu>
      </div>
      <div>
        <Switcher/>
      </div>
    </div>
  );
}

export default App
