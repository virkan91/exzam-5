import React from 'react'
import './home.css'
import hd01 from '../../assets/01-home/hd01.jpg'
import hd02 from '../../assets/01-home/hd02.png'
import { useTranslation } from 'react-i18next'
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
import s1a from '../../assets/01-home/s1a.png'
import s1b from '../../assets/01-home/s1b.svg'
import s1c from '../../assets/01-home/s1c.svg'
import s1d from '../../assets/01-home/s1d.svg'
import s1e from '../../assets/01-home/s1e.svg'
import s1f from '../../assets/01-home/s1f.svg'
import s1aa from '../../assets/01-home/s1aa.png'
import s1bb from '../../assets/01-home/s1bb.png'
import s1cc from '../../assets/01-home/s1cc.png'
import s1dd from '../../assets/01-home/s1dd.png'
import s1ee from '../../assets/01-home/s1ee.png'
import s1ff from '../../assets/01-home/s1ff.png'
import s2a from '../../assets/01-home/s2a.png'
import s2b from '../../assets/01-home/s2b.png'
import s2c from '../../assets/01-home/s2c.png'
import s2d from '../../assets/01-home/s2d.png'
import s2e from '../../assets/01-home/s2e.png'
import s2f from '../../assets/01-home/s2f.png'
import s3a from '../../assets/01-home/s3a.jpg'
import s3b from '../../assets/01-home/s3b.png'
import s3c from '../../assets/01-home/s3c.png'
import s3d from '../../assets/01-home/s3d.png'
import s3e from '../../assets/01-home/s3e.png'
import s3f from '../../assets/01-home/s3f.png'
import s4a from '../../assets/01-home/s4a.png'
import s4b from '../../assets/01-home/s4b.png'
import s4c from '../../assets/01-home/s4c.png'
import s4d from '../../assets/01-home/s4d.png'
import s5 from '../../assets/01-home/s5.png'
import { BiSolidDownload } from "react-icons/bi"
import s6 from '../../assets/01-home/s6.png'
import s7a from '../../assets/01-home/s7a.png'
import s7b from '../../assets/01-home/s7b.png'
import s7c from '../../assets/01-home/s7c.png'
import s7e from '../../assets/01-home/s7e.png'
import s7f from '../../assets/01-home/s7f.png'
import s7d from '../../assets/01-home/s7d.png'
import olis from "../../assets/02-page/olis.png"


const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      {/* s1 */}
      <section className='grid lg:grid-cols-[35%_65%] container'>
        {/* mobil v */}
        <div className='flex lg:hidden mt-[20px]'>
          <img src={hd02} alt="" className='w-full' />
        </div>
        {/* A */}
        <div className=' flex items-center z-[1] lg:pt-[80px] pt-[20px] flex-row gap-[15px] lg:gap-[33px]'>
          <div className='flex flex-col gap-[20px] items-center'>
            <p className='font-[900] text-[20px] wr'>{
              t("hd.t3")}</p>
            <div className='flex flex-col gap-[5px]'>
              <div className='bg-[#FEAD04] flex items-center justify-center cursor-pointer w-[29px] h-[29px] hover:opacity-50'>
                <BiLogoLinkedin></BiLogoLinkedin>
              </div>
              <div className='bg-[#FEAD04] flex items-center justify-center cursor-pointer w-[29px] h-[29px] hover:opacity-50'>
                <AiFillYoutube></AiFillYoutube>
              </div>
              <div className='bg-[#FEAD04] flex items-center justify-center cursor-pointer w-[29px] h-[29px] hover:opacity-50'>
                <BiLogoFacebook></BiLogoFacebook>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <p className='max-w-[679px] text-[#FEAD04] font-[900] text-[30px] lg:text-[55px] leading-[30px] lg:leading-[55px]'>{
              t("hd.t1")}</p>
            <hr className='my-[27px] max-w-[390px] border border-black bg-black w-full' />
            <p className='max-w-[430px] font-[300] lg:text-[33px] text-[22px] lg:leading-[40px]'>{
              t("hd.t2")}</p>
            <div className='cursor-pointer bg-[#FEAD04] py-[14px] px-[58px] text-white font-[700] mt-[20px] lg:mt-[47px]'>
              {t("hd.btn")}
            </div>
          </div>
        </div>
        {/* B */}
        <div className='relative hidden lg:flex right-[-60px]'>
          <img src={hd01} alt="" className='h-[549px]' />
        </div>
      </section>
      {/* s2 */}
      <section className='mt-[88px] container'>
        <p className='lg:text-[50px] text-[30px] font-[700]'>{
          t("s1.t1")}</p>
        <div className='grid lg:grid-cols-2 gap-[26px] pt-[30px]'>
          {/* a */}
          <div className={`aa py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1a} alt="" />
              <p>{
                t("s1.a")}</p>
            </div>
            <img src={s1aa} alt="" className='absolute right-[20px]' />
          </div>
          {/* b */}
          <div className={`bb py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1b} alt="" />
              <p>{
                t("s1.b")}</p>
            </div>
            <img src={s1bb} alt="" className='absolute right-[20px]' />
          </div>
          {/* c */}
          <div className={`bb py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1c} alt="" />
              <p>{
                t("s1.c")}</p>
            </div>
            <img src={s1cc} alt="" className='absolute right-[20px]' />
          </div>
          {/* d */}
          <div className={`dd py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1c} alt="" />
              <p>{
                t("s1.d")}</p>
            </div>
            <img src={s1dd} alt="" className='absolute right-[20px]' />
          </div>
          {/* e */}
          <div className={`dd py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1e} alt="" />
              <p>{
                t("s1.e")}</p>
            </div>
            <img src={s1ee} alt="" className='absolute right-[20px]' />
          </div>
          {/* f */}
          <div className={`dd py-[70px] flex items-center relative pr-[200px]`}>
            <div className='bg-white p-[25px] flex items-center gap-[20px]'>
              <img src={s1f} alt="" />
              <p>{
                t("s1.f")}</p>
            </div>
            <img src={s1ff} alt="" className='absolute right-[20px]' />
          </div>
        </div>
      </section>
      {/* s2 */}
      <section className='mt-[88px] container'>
        <p className='lg:text-[50px] text-[30px] font-[700]'>{
          t("s2.t1")}</p>
        <div className='grid lg:grid-cols-2 gap-[40px] pt-[30px]'>
          {/* a */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.a")}</p>
            <div className='flex w-full justify-end'>
              <img src={s2a} alt="" />
            </div>
          </div>
          {/* b */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.b")}</p>
            <div className='w-full flex justify-end'>
              <img src={s2b} alt="" />
            </div>
          </div>
          {/* c */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.c")}</p>
            <div className='w-full flex justify-end'>
              <img src={s2c} alt="" />
            </div>
          </div>
          {/* d */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.d")}</p>
            <div className='w-full flex justify-end'>
              <img src={s2d} alt="" />
            </div>
          </div>
          {/* e */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.f")}</p>
            <div className='w-full flex justify-end'>
              <img src={s2e} alt="" />
            </div>
          </div>
          {/* f */}
          <div className={`aa flex items-center relative`}>
            <p className='bg-[#FEAD04] text-white max-w-[250px] absolute top-[30px] left-[-30px] py-[5px] px-[10px]'>{
              t("s2.e")}</p>
            <div className='w-full flex justify-end'>
              <img src={s2f} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* s3 */}
      <section className='mt-[88px] container'>
        <p className='lg:text-[50px] text-[30px] font-[700]'>{
          t("s3.t1")}</p>
        <div className='grid lg:grid-cols-2 gap-[30px] pt-[30px]'>
          {/* a */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3a} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mb-[20px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.a")}</p>
          </div>
          {/* b */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3b} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mb-[20px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.b")}</p>
          </div>
          {/* с */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3c} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mx-[30px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.c")}</p>
          </div>
          {/* d */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3d} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mb-[20px] mx-[30px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.d")}</p>
          </div>
          {/* e */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3e} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mb-[20px] mx-[30px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.e")}</p>
          </div>
          {/* f */}
          <div className='relative shs3 pb-[40px] flex justify-center text-center'>
            <img src={s3f} alt="" className='w-full' />
            <p className='bg-white min-w-[290px] mb-[20px] mx-[30px] text-[26px] font-[500] py-[3px] absolute bottom-0'>{
              t("s3.f")}</p>
          </div>
        </div>
      </section>
      {/* s4 */}
      <section className='mt-[88px] container'>
        <p className='lg:text-[50px] text-center text-[30px] font-[700]'>{
          t("s4.t1")}</p>
        <div className='mt-[20px] md:grid-cols-2 grid lg:grid-cols-4 justify-center gap-[40px] lg:gap-[100px]'>
          {/* a */}
          <div className='flex flex-col items-center text-center'>
            <img src={s4a} alt="" />
            <p className='mt-[20px]'>{
              t("s4.a")}</p>
          </div>
          {/* b */}
          <div className='flex flex-col items-center text-center'>
            <img src={s4b} alt="" />
            <p className='mt-[20px]'>{
              t("s4.b")}</p>
          </div>
          {/* c */}
          <div className='flex flex-col items-center text-center'>
            <img src={s4c} alt="" />
            <p className='mt-[20px]'>{
              t("s4.c")}</p>
          </div>
          {/* d */}
          <div className='flex flex-col items-center text-center'>
            <img src={s4d} alt="" />
            <p className='mt-[20px]'>{
              t("s4.d")}</p>
          </div>
        </div>
      </section>
      {/* s5 */}
      <section className='grid gap-[20px] lg:gap-0 lg:grid-cols-[40%_60%] container mt-[70px]'>
        <div className='flex flex-col justify-center items-start lg:pr-[50px]'>
          <p className='text-[50px] font-[300]'>{
            t("s5.t1")}</p>
          <p className='mt-[13px] leading-[24px] max-w-[615px]'>{
            t("s5.t2")}</p>
          <div className='bg-[#FEAD04] flex gap-[5px] items-center px-[30px] py-[8px] mt-[20px] cursor-pointer font-[700] text-white'>
            <p>{
              t("s5.btn")}</p>
            <BiSolidDownload className='text-[25px]'></BiSolidDownload>
          </div>
        </div>
        <div>
          <img src={s5} alt="" />
        </div>
      </section>
      {/* s6 */}
      <section className='grid gap-[20px] lg:gap-0 mt-[30px] lg:mt-0 lg:grid-cols-[60%_40%] container'>
        <div>
          <img src={s6} alt="" />
        </div>
        <div className='flex flex-col justify-center items-start lg:pl-[50px]'>
          <p className='text-[50px] font-[300]'>{
            t("s6.t1")}</p>
          <p className='mt-[13px] leading-[24px] max-w-[615px]'>{
            t("s6.t2")}</p>
          <div className='bg-[#FEAD04] px-[30px] py-[8px] mt-[20px] cursor-pointer font-[700] text-white'>
            <p>{
              t("s6.btn")}</p>
          </div>
        </div>
      </section>
      {/* s7 */}
      <section className='mt-[88px] container'>
        <p className='lg:text-[50px] text-[30px] font-[300]'>{
          t("s7.t1")}</p>
        <div className='grid gap-[30px] lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-[20px]'>
          {/* a */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7a} alt="" />
          </div>
          {/* b */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7b} alt="" />
          </div>
          {/* c */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7c} alt="" />
          </div>
          {/* d */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7d} alt="" />
          </div>
          {/* e */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7e} alt="" />
          </div>
          {/* f */}
          <div className='bg-gray-100 cursor-pointer py-[20px] flex items-center justify-center px-[30px] h-[150px]'>
            <img src={s7f} alt="" />
          </div>
        </div>
      </section>
      {/* form */}
      <section className="bg_section py-[30px] mt-[30px]">
        <div className="container">
          <div className="md:flex  justify-between flex-wrap items-center">
            <div>
              <img src={olis} alt="" />
            </div>
            <form className="bg-[#FFFFFF] md:w-[45%] p-[40px_50px] w-full mt-[30px] md:mt-auto">
              <h2 className="text-[32px] font-light	">
                {t("form.t1")}
              </h2>
              <p>
                {t("form.t2")}
              </p>
              <div className="py-[25px] flex gap-6">
                <input type="text" placeholder={t("form.t3")} />
                <input type="text" placeholder={t("form.t4")} />
              </div>
              <div>
                <input type="text" placeholder="Email" className="w-[100%]" />
              </div>
            <div className=' mt-[40px] bg-[#FEAD04] text-white py-[10px] max-w-[350px] text-center font-[700] cursor-pointer'>
              {t("form.btn")}
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home