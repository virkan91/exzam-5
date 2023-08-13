import React, { useRef, useState } from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/layout/logo.png'
import { useTranslation } from "react-i18next";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import MyTranslation from "../components/MyTranslation"
import Switcher from "../components/Darkmode/Switcher"

const Layout = () => {
    const { t, i18n } = useTranslation()
    const [modal, setModal] = useState(false)
    const windowOnclick = useRef()
    const myModal = (event) => {
        if (event.target == windowOnclick.current) setModal(false)
    }
    return (
        <div>
            {/* navbar */}
            <nav className="py-[28px] px-[20px] container flex items-center justify-between">
                {/* logo */}
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className="lg:max-w-[180px] max-w-[130px]" />
                    </Link>
                </div>
                <ul className="lg:flex gap-[20px] items-cente hidden">
                    <Link to="/">
                        {t("nav.l1")}
                    </Link>
                    <Link to="/page-2">
                        {t("nav.l2")}
                    </Link>
                    <Link to="/page-3">
                        {t("nav.l3")}
                    </Link>
                    <Link to="/page-4">
                        {t("nav.l4")}
                    </Link>
                    <Link to="/page-5">
                        {t("nav.l5")}
                    </Link>
                </ul>
                {/* menu */}
                <div className="flex lg:hidden">
                    <AiOutlineMenu
                        onClick={() => setModal(true)}
                    ></AiOutlineMenu>
                </div>
                {
                    modal ? <div ref={windowOnclick} onClick={(event) => myModal(event)} className="absolute flex justify-end w-full top-0 right-0 h-screen z-10">
                        <div className="bg-[#FEAD04] p-[50px] h-full flex flex-col gap-[20px]">
                            <div className="flex justify-end">
                                <GrClose
                                    onClick={() => setModal(false)}
                                ></GrClose>
                            </div>
                            <ul className="flex flex-col gap-[20px] items-cente">
                                <Link to="/">
                                    {t("nav.l1")}
                                </Link>
                                <Link to="/page-2">
                                    {t("nav.l2")}
                                </Link>
                                <Link to="/page-3">
                                    {t("nav.l3")}
                                </Link>
                                <Link to="/page-4">
                                    {t("nav.l4")}
                                </Link>
                                <Link to="/page-5">
                                    {t("nav.l5")}
                                </Link>
                            </ul>
                            <div className="flex flex-col gap-[15px]">
                                <div className="flex justify-evenly items-center gap-[10px]">
                                    <AiOutlineSearch></AiOutlineSearch>
                                    <MyTranslation></MyTranslation>
                                    <Switcher></Switcher>
                                </div>
                                <div className="block md:hidden">
                                    <p>{
                                        t("nav.t1")}</p>
                                    <div className="flex items-center gap-[5px]">
                                        <BsTelephoneFill></BsTelephoneFill>
                                        <p className="font-[900]">+38 (067) 822-85-58</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                        null
                }
                <div className="flex items-center gap-[15px]">
                    <AiOutlineSearch></AiOutlineSearch>
                    <MyTranslation></MyTranslation>
                    <Switcher></Switcher>
                    <div className="hidden md:block">
                        <p>{
                            t("nav.t1")}</p>
                        <div className="flex items-center gap-[5px]">
                            <BsTelephoneFill></BsTelephoneFill>
                            <p className="font-[900]">+38 (067) 822-85-58</p>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;
