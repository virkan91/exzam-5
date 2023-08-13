import React, { useRef, useState } from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/layout/logo.png'
import { useTranslation } from "react-i18next";
import { AiOutlineSearch, AiOutlineMenu, AiFillInstagram } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BiLogoTelegram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi"
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
            <nav className="py-[28px] container flex items-center justify-between">
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
                    <Link to="/page-6">
                        {t("nav.l6")}
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
                                <Link to="/page-6">
                                    {t("nav.l6")}
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

            {/* footer */}
            <footer className="flex container justify-between flex-wrap gap-[50px] mt-[80px]">
                {/* 1 */}
                <div className="max-w-[181px]">
                    <div>
                        <img src={logo} alt="" className="max-w-[180px]" />
                    </div>
                    <p className="opacity-50 text-[14px] mt-[14px]">{
                        t("footer.t1")}</p>
                    <p className="text-[#FEAD04] mt-[10px]">{
                        t("footer.t2")}</p>
                </div>
                {/* 2 */}
                <form action="#">
                    <p className="text-[18px] font-[700]">{
                        t("footer.t3")}</p>
                    <div className="border border-[#F1F1F1] rounded flex justify-between mt-[19px]">
                        <input type="text" placeholder={t("footer.t4")} className="py-[14px] pl-[24px] outline-none border-none" />
                        <div className="bg-[#FEAD04] text-white flex cursor-pointer items-center justify-center px-[15px] text-[20px]">
                            <BiLogoTelegram></BiLogoTelegram>
                        </div>
                    </div>
                </form>
                {/* ul 1 */}
                <ul>
                    <li className="font-[700] cursor-pointer">{
                        t("footer.ul1.l1")}</li>
                    <li className="mt-[18px] cursor-pointer">{
                        t("footer.ul1.l2")}</li>
                    <li className="mt-[15px] cursor-pointer">{
                        t("footer.ul1.l3")}</li>
                    <li className="mt-[15px] cursor-pointer">{
                        t("footer.ul1.l4")}</li>
                </ul>
                {/* ul 2 */}
                <ul>
                    <li className="font-[700] cursor-pointer">{
                        t("footer.ul2.l1")}</li>
                    <li className="mt-[18px] cursor-pointer">{
                        t("footer.ul2.l2")}</li>
                    <li className="mt-[15px] cursor-pointer">{
                        t("footer.ul2.l3")}</li>
                    <li className="mt-[15px] cursor-pointer">{
                        t("footer.ul2.l4")}</li>
                </ul>
                <div className="flex sm:flex-row flex-col gap-[20px]">
                    <div>
                        <p className="font-[700] text-[18px]">{
                            t("footer.t5.t1")}</p>
                        <p className="text-[13px] font-[600] mt-[18px]">{
                            t("footer.t5.t2")}</p>
                        <div className="flex gap-[5px] items-center mt-[8px]">
                            <BsTelephoneFill className="text-[#FEAD04]"></BsTelephoneFill>
                            <p>+38 (067) 822-85-58</p>
                        </div>
                        <p className="text-[13px] font-[600] mt-[18px]">{
                            t("footer.t5.t3")}</p>
                        <div className="flex gap-[5px] items-center mt-[8px]">
                            <BsTelephoneFill className="text-[#FEAD04]"></BsTelephoneFill>
                            <p>+7 (831) 288-93-74</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[10px] justify-center text-white">
                            <div className="p-[7px] flex justify-center items-center bg-[#FEAD04] rounded-full cursor-pointer text-[12px]">
                                <BiLogoLinkedin></BiLogoLinkedin>
                            </div>
                            <div className="p-[7px] flex justify-center items-center bg-[#FEAD04] rounded-full cursor-pointer text-[12px]">
                                <BiLogoYoutube></BiLogoYoutube>
                            </div>
                            <div className="p-[7px] flex justify-center items-center bg-[#FEAD04] rounded-full cursor-pointer text-[12px]">
                                <AiFillInstagram></AiFillInstagram>
                            </div>
                        </div>
                        <p className="text-[14px] font-[700] mt-[5px]">E-mail</p>
                        <div className="flex items-center gap-[3px]">
                            <MdEmail className="text-[#FEAD04]"></MdEmail>
                            <p>olis1@ukr.net</p>
                        </div>
                        <div className="flex items-center gap-[3px]">
                            <MdEmail className="text-[#FEAD04]"></MdEmail>
                            <p>info@olis.com.ua</p>
                        </div>
                        <p className="font-[700] text-[14px] mt-[7px]">{
                            t("footer.t6")}</p>
                        <p className="text-[14px]">с 8:00 - до 17:00</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
