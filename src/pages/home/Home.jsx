import React from 'react'
import './home.css'
import hd01 from '../../assets/01-home/hd01.jpg'
import hd02 from '../../assets/01-home/hd02.png'
import { useTranslation } from 'react-i18next'
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'

const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      {/* s1 */}
      <section className='grid lg:grid-cols-[35%_65%] container'>
        {/* mobil v */}
        <div className='flex lg:hidden mt-[20px]'>
          <img src={hd02} alt="" className='w-full'/>
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
    </div>
  )
}

export default Home